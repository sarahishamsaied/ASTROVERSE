const { comments } = require("../../../models/index");
const postComment = (req, res) => {
  try {
    const { comment_author_id, announcement_id, comment_body } = req.body;
    comments.create({
      comment_author_id,
      announcement_id,
      comment_body,
    });
    res.status(200).json({ message: "Comment posted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getCommentsOnAnnouncement = async (req, res) => {
  try {
    const { announcement_id } = req.params;
    const foundComments = await comments.findAll({
      where: {
        announcement_id,
      },
    });
    res.status(200).json(foundComments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const foundComment = await comments.findOne({
      where: { id },
    });
    if (foundComment) {
      await foundComment.destroy();
      res.status(200).json({ message: "Comment deleted successfully" });
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { postComment, getCommentsOnAnnouncement, deleteComment };
