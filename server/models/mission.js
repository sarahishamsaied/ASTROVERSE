"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mission extends Model {
    static associate(models) {
      this.hasOne(models.crews, {
        as: "crew",
        foreignKey: "crew_id",
      });
    }
  }
  mission.init(
    {
      mission_name: DataTypes.STRING,
      rocket_id: DataTypes.INTEGER,
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      phase: DataTypes.STRING,
      planet_id: DataTypes.STRING,
      objective: DataTypes.STRING,
      launch_date: DataTypes.DATE,
      approved: DataTypes.BOOLEAN,
      admin_id: DataTypes.INTEGER,
      // crew_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "missions",
    }
  );
  return mission;
};
