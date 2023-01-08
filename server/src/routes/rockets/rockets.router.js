const express = require("express");
const {
  getAllRockets,
  addRocket,
  getRocket,
  deleteRocket,
  updateRocket,
} = require("./rockets.controller");
const planetsRouter = express.Router();
planetsRouter.route("/").get(getAllRockets).post(addRocket);
planetsRouter
  .route("/:id")
  .get(getRocket)
  .delete(deleteRocket)
  .put(updateRocket);
module.exports = planetsRouter;
