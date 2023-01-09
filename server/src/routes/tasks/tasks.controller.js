const { users, tasks, missions } = require("../../../models/index");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("astroverse-dev", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});
const addTask = async (req, res) => {
  try {
    const { astronaut_id, mission_id, priority, task_name, task_description } =
      req.body;
    const foundUser = await users.findOne({
      where: {
        id: astronaut_id,
      },
    });
    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const foundMission = await missions.findOne({
      where: {
        id: mission_id,
      },
    });
    if (!foundMission) {
      console.log("mission not found");
      return res.status(404).json({ message: "Mission not found" });
    }
    const task = await tasks.create({
      astronaut_id,
      mission_id,
      task_description,
      task_name,
      priority,
      added_at: new Date(),
    });
    res.json({
      message: "Task added successfully",
      task,
    });
    console.log("yyyyyyyyyyyyyyyyyaaaaaaaaaas");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const getAllTasks = async (req, res) => {
  try {
    const sql =
      "SELECT * FROM tasks JOIN astronauts on tasks.astronaut_id = astronauts.id JOIN users on astronauts.uid = users.id ";
    const [result, metadata] = await sequelize.query(sql);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const foundTask = await tasks.findOne({
      where: { id },
    });
    if (!foundTask) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      return res.status(200).json(foundTask);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { astronaut_id, mission_id, priority, task_name, task_description } =
      req.body;
    const foundTask = await tasks.findOne({
      where: { id },
    });
    if (!foundTask) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      const updatedTask = await tasks.update(
        {
          astronaut_id,
          mission_id,
          priority,
          task_name,
          task_description,
        },
        {
          where: { id },
        }
      );
      return res.status(200).json(updatedTask);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const foundTask = await tasks.findOne({
      where: { id },
    });
    if (!foundTask) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      const deletedTask = await tasks.destroy({
        where: { id },
      });
      return res.status(200).json(deletedTask);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const tasksPerMonth = async (req, res) => {
  try {
    const sql =
      "SELECT COUNT(id) as count, EXTRACT(MONTH FROM added_at::date) as month FROM tasks GROUP BY month ORDER BY month";
    const [result, metadata] = await sequelize.query(sql);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("habala");
  }
};
const completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const foundTask = await tasks.findOne({
      where: { id },
    });
    if (!foundTask) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      foundTask.update({
        is_completed: true,
      });
      await foundTask.save({ fields: ["is_completed"] });
      console.log("brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      console.log(foundTask.dataValues);
      return res.status(200).json({ message: "Task completed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const unCompleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const foundTask = await tasks.findOne({
      where: { id },
    });
    if (!foundTask) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      console.log("brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      console.log(foundTask);
      foundTask.update({
        is_completed: false,
      });
      await foundTask.save({ fields: ["is_completed"] });
      console.log(foundTask.dataValues);
      return res.status(200).json({ message: "Task uncompleted" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  tasksPerMonth,
  addTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  completeTask,
  unCompleteTask,
};
