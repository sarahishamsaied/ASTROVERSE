const commentsRouter = require("express").Router();
const {
  postComment,
  deleteComment,
  getCommentsOnAnnouncement,
} = require("./comments.controller");
commentsRouter.route("/").post(postComment);
commentsRouter.route("/:id").delete(deleteComment);
commentsRouter.route("/:announcement_id").get(getCommentsOnAnnouncement);
module.exports = commentsRouter;
