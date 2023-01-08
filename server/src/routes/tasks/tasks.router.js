const tasksRouter = require("express").Router();
const {
  getAllTasks,
  addTask,
  getTask,
  deleteTask,
  updateTask,
  tasksPerMonth,
  completeTask,
  unCompleteTask,
} = require("./tasks.controller");
tasksRouter.route("/tasksPerMonth").get(tasksPerMonth);
tasksRouter.route("/completeTask/:id").post(completeTask);
tasksRouter.route("/unCompleteTask/:id").post(unCompleteTask);
tasksRouter.route("/").get(getAllTasks).post(addTask);
tasksRouter.route("/:id").get(getTask).delete(deleteTask).put(updateTask);
module.exports = tasksRouter;
