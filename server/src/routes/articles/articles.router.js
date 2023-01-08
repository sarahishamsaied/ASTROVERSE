const articlesRouter = require("express").Router();
const {
  getAllArticles,
  addArticle,
  deleteArticle,
  updateArticle,
  getArticle,
} = require("./articles.controller");
articlesRouter.route("/").get(getAllArticles).post(addArticle);
articlesRouter
  .route("/:id")
  .delete(deleteArticle)
  .put(updateArticle)
  .get(getArticle);
module.exports = articlesRouter;
