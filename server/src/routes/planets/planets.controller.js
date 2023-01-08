const { planets, missions } = require("../../../models/index");
const planet = require("../../../models/planet");
const database = require("../../../config/database");
const { cloudinary } = require("../../../utils/cloudinary");
const multer = require("multer");
const getAllPlanets = async (req, res) => {
  try {
    const foundPlanets = await planets.findAll();
    return res.status(200).json(foundPlanets);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
const addImage = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage: storage }).single("file");
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};
const addPlanet = async (req, res) => {
  try {
    const {
      planet_name,
      mass,
      no_of_satellites,
      distance_from_earth,
      revolution_duration,
      rotation_duration,
      rotational_speed,
      no_of_moons,
      temperature,
      gravity,
      structure,
      map_image,
    } = req.body;
    const uploadedResponse = await cloudinary.uploader.upload(map_image, {
      timeout: 120000,
      upload_preset: "astroverse",
    });
    console.log("uploaded response is", uploadedResponse);
    console.log(map_image, planet_name);
    const rocket = await planets.create({
      planet_name,
      mass,
      no_of_satellites,
      distance_from_earth,
      revolution_duration,
      rotation_duration,
      rotational_speed,
      no_of_moons,
      map_image,
      temperature,
      gravity,
      map_image: uploadedResponse.secure_url,
      structure,
    });
    res.status(200).json({
      message: "Planet added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const getPlanetById = async (req, res) => {
  try {
    const { id } = req.params;
    const planet = await planets.findOne({
      where: {
        id,
      },
    });
    if (!planet) return res.status(400).json({ message: "planet not found" });
    const sql = `SELECT lat,lng,mission_name,phase FROM missions WHERE planet_id = '${id}'`;
    const [positions, metaData] = await database.query(sql);
    console.log(positions);
    return res.status(200).json({ ...planet.dataValues, positions });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const getClosestPlanets = async (req, res) => {
  try {
    const foundPlanets = await planets.findAll({
      order: [["distance_from_earth", "ASC"]],
    });
    res.json(foundPlanets);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
const deletePlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const planet = await planets.findOne({
      where: {
        id,
      },
    });
    if (!planet) return res.status(400).json({ message: "planet not found" });
    await planet.destroy();
    return res.status(200).json({ message: "planet deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const updatePlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      planet_name,
      mass,
      no_of_satellites,
      distance_from_earth,
      revolution_duration,
      rotation_duration,
      rotational_speed,
      no_of_moons,
      map_image,
      temperature,
      gravity,
      structure,
    } = req.body;
    const planet = await planets.findOne({
      where: {
        id,
      },
    });
    if (!planet) return res.status(400).json({ message: "planet not found" });
    planet.set({
      planet_name,
      mass,
      no_of_satellites,
      distance_from_earth,
      revolution_duration,
      rotation_duration,
      rotational_speed,
      no_of_moons,
      map_image,
      temperature,
      gravity,
      structure,
    });
    await planet.save();
    return res.status(200).json({ message: "planet updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  getAllPlanets,
  addPlanet,
  getPlanetById,
  getClosestPlanets,
  deletePlanet,
  updatePlanet,
};
