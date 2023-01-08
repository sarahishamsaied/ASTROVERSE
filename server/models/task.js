"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ astronauts }) {}
  }
  Task.init(
    {
      astronaut_id: DataTypes.INTEGER,
      mission_id: DataTypes.INTEGER,
      priority: DataTypes.STRING,
      task_name: DataTypes.STRING,
      task_description: DataTypes.STRING,
      is_completed: DataTypes.BOOLEAN,
      added_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "tasks",
    }
  );
  return Task;
};
