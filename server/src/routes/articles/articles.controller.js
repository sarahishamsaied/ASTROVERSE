const { articles } = require("../../../models/index");
const { cloudinary } = require("../../../utils/cloudinary");
const addArticle = async (req, res) => {
  try {
    const { author_id, title, body, category, image } = req.body;
    const uploadedResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "astroverse",
    });
    console.log("yaaaaaaaaaaaay");
    console.log(uploadedResponse);
    await articles.create({
      author_id,
      title,
      body,
      category,
      image: uploadedResponse.secure_url,
    });
    res.status(200).json({ message: "Article added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAllArticles = async (req, res) => {
  try {
    const foundArticles = await articles.findAll();
    res.status(200).json(foundArticles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const foundArticle = await articles.findOne({
      where: { id },
    });
    if (foundArticle) {
      await foundArticle.destroy();
      res.status(200).json({ message: "Article deleted successfully" });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, category } = req.body;
    const foundArticle = await articles.findOne({
      where: { id },
    });
    if (!foundArticle)
      return res.status(404).json({ message: "Article not found" });
    foundArticle.set({
      title,
      body,
      category,
    });
    foundArticle.save();
    res.status(200).json({ message: "Article updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const foundArticle = await articles.findOne({
      where: { id },
    });
    if (!foundArticle)
      return res.status(404).json({ message: "Article not found" });
    res.status(200).json(foundArticle);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  addArticle,
  getAllArticles,
  deleteArticle,
  updateArticle,
  getArticle,
};
