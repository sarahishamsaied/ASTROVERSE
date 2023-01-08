const announcementsRouter = require("express").Router();
const {
  getAllAnnouncements,
  addAnnouncement,
  getAnnouncement,
  deleteAnnouncement,
} = require("./announcements.controller");
announcementsRouter.route("/").get(getAllAnnouncements).post(addAnnouncement);
announcementsRouter
  .route("/:id")
  .get(getAnnouncement)
  .delete(deleteAnnouncement);
module.exports = announcementsRouter;
