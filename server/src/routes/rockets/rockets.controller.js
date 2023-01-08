const { rockets } = require("../../../models/index");
const getAllRockets = async (req, res) => {
  try {
    const foundRockets = await rockets.findAll();
    return res.status(200).json(foundRockets);
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};
const addRocket = async (req, res) => {
  try {
    const {
      rocket_name,
      weight,
      capacity,
      rocket_type,
      thrust,
      fuel,
      velocity,
      mass,
      momentum,
    } = req.body;
    console.log(req);
    const rocket = await rockets.create({
      rocket_name,
      weight,
      capacity,
      rocket_type,
      thrust,
      fuel,
      velocity,
      mass,
      momentum,
    });
    res.json({
      message: "Rocket added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
const getRocket = async (req, res) => {
  try {
    const { id } = req.params;
    const foundRocket = await rockets.findOne({
      where: { id },
    });
    if (!foundRocket) {
      return res.status(404).json({ message: "Rocket not found" });
    } else {
      return res.status(200).json(foundRocket);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const deleteRocket = async (req, res) => {
  try {
    const { id } = req.params;
    const foundRocket = await rockets.findOne({
      where: { id },
    });
    if (!foundRocket)
      return res.status(404).json({ message: "Rocket not found" });
    else {
      foundRocket.destroy();
      return res.status(200).json({ message: "Rocket deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const updateRocket = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rocket_name,
      weight,
      capacity,
      rocket_type,
      thrust,
      fuel,
      velocity,
      mass,
      momentum,
    } = req.body;
    const foundRocket = await rockets.findOne({
      where: { id },
    });
    if (!foundRocket) {
      return res.status(404).json({ message: "Rocket not found" });
    } else {
      foundRocket.update({
        rocket_name,
        weight,
        capacity,
        rocket_type,
        thrust,
        fuel,
        velocity,
        mass,
        momentum,
      });
      await foundRocket.save();
      return res.status(200).json({ message: "Rocket updated successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
module.exports = {
  getAllRockets,
  addRocket,
  getRocket,
  updateRocket,
  deleteRocket,
};
