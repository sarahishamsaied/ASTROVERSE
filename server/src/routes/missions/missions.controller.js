const { missions } = require("../../../models/index");
//Requests Mission
const requestMission = async (req, res) => {
  try {
    const {
      mission_name,
      rocket_id,
      lat,
      lng,
      planet_id,
      objective,
      admin_id,
    } = req.body;
    const addedMission = await missions.create({
      mission_name,
      rocket_id,
      lat,
      lng,
      admin_id,
      planet_id,
      objective,
      approved: false,
      launch_date: new Date().getTime(),
      phase: "pending",
    });
    //TODO:
    //add approved field
    //add specific admin id
    res.status(200).json({ message: "mission requeted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
//Updates Mission
const updateMission = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      mission_name,
      rocket_id,
      lat,
      lng,
      planet_id,
      objective,
      admin_id,
    } = req.body;
    const updatedMission = await missions.findOne({
      where: {
        id,
      },
    });
    if (!updatedMission) {
      res.status(404).json({ message: "Mission not found" });
      return;
    }
    updatedMission.set({
      mission_name,
      rocket_id,
      lat,
      lng,
      planet_id,
      objective,
      admin_id,
    });
    await updatedMission.save();
    res.status(200).json({ message: "Mission updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
//Deletes Mission
const deleteMission = async (req, res) => {
  try {
    const { id } = req.params;
    const foundMission = await missions.findOne({
      where: {
        id,
      },
    });
    if (!foundMission) {
      res.status(404).json({ message: "Mission not found" });
      return;
    }
    await foundMission.destroy();
    res.status(200).json({ message: "Mission deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Gets Mission By Id
const getMission = async (req, res) => {
  try {
    const { id } = req.params;
    const foundMission = await missions.findOne({
      where: {
        id,
      },
    });
    if (!foundMission) {
      res.status(404).json({ message: "Mission not found" });
      return;
    }
    res.status(200).json(foundMission);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server error");
  }
};
//Gets All Missions (Approved and Pending)
const getAllMissions = async (req, res) => {
  try {
    const allMissions = await missions.findAll();
    res.status(200).json(allMissions);
  } catch (error) {
    res.status(500).json("Internal Server error");
  }
};
//Gets All Approved Missions
const getAllApprovedMissions = async (req, res) => {
  try {
    const allMissions = await missions.findAll();
    console.log(allMissions);
    res.status(200).json(allMissions);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server error");
  }
};
//Gets All Rejected Missions

const getAllRejectedMissions = async (req, res) => {
  try {
    const allMissions = await missions.findAll({
      where: {
        approved: false,
      },
    });
    res.status(200).json(allMissions);
  } catch (error) {
    res.status(500).json("Internal Server error");
  }
};
//Accepts Mission

const acceptMission = async (req, res) => {
  const { id } = req.body;
  try {
    const foundMission = await missions.findOne({
      where: {
        id,
      },
    });
    if (!foundMission) {
      res.status(404).json({ message: "Mission not found" });
      return;
    }
    foundMission.approved = true;
    foundMission.set({
      foundMission,
    });
    await foundMission.save();
    res.json({ message: "Mission accepted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const rejectMission = async (req, res) => {
  const { id } = req.body;
  try {
    const foundMission = await missions.findOne({
      where: {
        id,
      },
    });
    if (!foundMission) {
      res.status(404).json({ message: "Mission not found" });
      return;
    }
    foundMission.approved = false;
    foundMission.set({
      foundMission,
    });
    await foundMission.save();
    res.json({ message: "Mission rejected successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  requestMission,
  updateMission,
  deleteMission,
  getAllMissions,
  getMission,
  acceptMission,
  rejectMission,
  getAllApprovedMissions,
  getAllRejectedMissions,
};
