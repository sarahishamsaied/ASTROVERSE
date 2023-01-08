const express = require("express");
const {
  getAllPlanets,
  addPlanet,
  getPlanetById,
  getClosestPlanets,
  deletePlanet,
} = require("../planets/planets.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/planets");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

const planetsRouter = express.Router();
planetsRouter.route("/").get(getAllPlanets).post(addPlanet);
planetsRouter.route("/:id").get(getPlanetById).delete(deletePlanet);
planetsRouter.get("/closest", getClosestPlanets);
module.exports = planetsRouter;
