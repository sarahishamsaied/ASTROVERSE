"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rocket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rocket.init(
    {
      rocket_name: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      rocket_type: DataTypes.STRING,
      thrust: DataTypes.INTEGER,
      fuel: DataTypes.STRING,
      velocity: DataTypes.INTEGER,
      mass: DataTypes.INTEGER,
      momentum: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "rockets",
    }
  );
  return Rocket;
};
