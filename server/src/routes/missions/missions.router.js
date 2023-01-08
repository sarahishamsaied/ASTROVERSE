const {
  getAllMissions,
  requestMission,
  updateMission,
  getMission,
  deleteMission,
  getAllApprovedMissions,
  getAllRejectedMissions,
  acceptMission,
  rejectMission,
} = require("./missions.controller");

const missionRouter = require("express").Router();
missionRouter.route("/").get(getAllMissions).post(requestMission);
missionRouter
  .route("/:id")
  .put(updateMission)
  .get(getMission)
  .delete(deleteMission);
missionRouter.route("/approve/:id").put(acceptMission);
missionRouter.route("/reject/:id").put(rejectMission);
missionRouter.get("/approved", getAllApprovedMissions);
missionRouter.get("/rejected", getAllRejectedMissions);
module.exports = missionRouter;
