const { announcements, comments, users } = require("../../../models/index");
const database = require("../../../config/database");

const addAnnouncement = async (req, res) => {
  try {
    const { title, body, author_id } = req.body;
    const foundAuthor = await users.findOne({
      where: { id: author_id },
    });
    if (!foundAuthor)
      return res.status(404).json({ message: "Author not found" });

    const announcement = await announcements.create({
      title,
      body,
      author_id,
    });
    res
      .status(200)
      .json({ message: "Announcement added successfully", announcement });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const getAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const foundAnnouncement = await announcements.findOne({
      where: { id },
      include: [{ model: "comments" }],
    });
    if (!foundAnnouncement)
      return res.status(404).json({ message: "Announcement not found" });
    else {
      const comments = await comments.findAll({
        where: { announcement_id: id },
      });
      res.status(200).json({ ...foundAnnouncement, comments: comments });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const getAllAnnouncements = async (req, res) => {
  try {
    const sql = `SELECT * FROM announcements JOIN users ON announcements.author_id = users.id `;
    const [result, metadata] = await database.query(sql);
    const announcements = result.map(async (announcement) => {
      announcement.password = undefined;
      const sqlComments = `SELECT * FROM comments WHERE announcement_id = ${announcement.id}`;
      const [comments, metadata] = await database.query(sqlComments);
      const users = comments.map(async (comment) => {
        const sqlUser = `SELECT * FROM users WHERE id = ${comment.comment_author_id}`;
        let [user, metadata] = await database.query(sqlUser);
        return user;
      });
      const usersData = await Promise.all(users);
      comments.map((comment, index) => {
        comment.user = usersData[index][0];
        console.log(comment);
      });

      return { ...announcement, comments };
    });
    const announcementsWithComments = await Promise.all(announcements);
    res.status(200).json(announcementsWithComments);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const foundAnnouncement = await announcements.findOne({
      where: { id },
    });
    if (!foundAnnouncement)
      return res.status(400).json({ message: "Announcement not found" });
    else {
      foundAnnouncement.destroy();
      res.status(200).json({ message: "Announcement deleted successfully" });
    }
  } catch (err) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};
const getAuthorAnnouncements = async (req, res) => {
  try {
    const { author_id } = req.body;
    const author = await users.findOne({
      where: { id: author_id },
    });
    if (!author) return res.status(404).json({ message: "Author not found" });
    const foundAnnouncements = await announcements.findAll({
      where: { author_id },
    });
    res.status(200).json(foundAnnouncements);
  } catch (error) {}
};
module.exports = {
  addAnnouncement,
  getAnnouncement,
  getAllAnnouncements,
  deleteAnnouncement,
  getAuthorAnnouncements,
};
