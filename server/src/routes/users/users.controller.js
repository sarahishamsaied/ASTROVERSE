const { Sequelize } = require("sequelize");
const { astronauts, users } = require("../../../models/index");
const sequelize = new Sequelize("astroverse-dev", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: true,
  },
});
const getAllAdmins = async (req, res) => {
  try {
    const sql =
      "SELECT * FROM users JOIN astronauts on users.id = astronauts.uid";
    const [data, metadata] = await sequelize.query(sql);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server error");
  }
};
const uploadProfilePicture = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(req.file.path);
    const foundUser = await users.findOne({
      where: {
        id,
      },
    });
    foundUser.update({ profile_picture: req.file.path }).then((data) => {
      console.log("data", data);
    });
    await foundUser.save();
    res.status(200).json({
      message: "Profile picture uploaded successfully",
      data: req.file,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};
const assignRole = async (req, res) => {
  console.log(req.body);
  try {
    const { id, authority_level } = req.body;
    const foundUser = await users.findOne({
      where: {
        id,
      },
    });
    console.log("foundUser", foundUser);
    if (!foundUser) {
      return res.status(404).json("User not found");
    }
    foundUser.update({ authority_level });
    await foundUser.save();
    res.status(200).json("Role assigned successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await users.findOne({
      where: {
        id,
      },
    });
    if (!foundUser) return res.status(404).json("User not found");
    res.status(200).json(foundUser);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};
const addNewAstronaut = async (req, res) => {
  try {
    const {
      email,
      password,
      salary,
      role,
      years_of_experience,
      first_name,
      last_name,
      age,
    } = req.body;
    const foundUser = await users.findOne({
      where: {
        email,
      },
    });
    if (foundUser) return res.status(400).json("User already exists");
    const addedUser = await users.create({
      email,
      password,
      first_name,
      last_name,
      age,
      authority_level: "astronaut",
      registered_at: new Date(),
    });
    const login_id = `AS-${Date.now()}${Math.random()}${role[0].toUpperCase()}`;
    const addedAstronaut = await astronauts.create({
      uid: addedUser.id,
      salary,
      years_of_experience,
      role,
      login_id,
      is_admin: false,
    });
    console.log({});
    res.status(200).json({
      ...addedUser.dataValues,
      ...addedAstronaut.dataValues,
      password: undefined,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};
const registeredUsersPerMonth = async (req, res) => {
  try {
    const sql =
      "SELECT COUNT(id) as count, EXTRACT(MONTH FROM registered_at::date) as month FROM users GROUP BY month ORDER BY month";
    const [result, metadata] = await sequelize.query(sql);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = {
  getAllAdmins,
  assignRole,
  uploadProfilePicture,
  getUser,
  addNewAstronaut,
  registeredUsersPerMonth,
};
