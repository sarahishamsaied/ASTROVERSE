"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    planet_name;
    mass;
    gravity;
    temerature;
    distance_from_earth;
    rotation_duration;
    revolution_duration;
    no_of_moons;
    structure;
    map_image;
    no_of_satellites;
    rotational_speed;
    static associate(models) {
      // define association here
    }
  }
  Planet.init(
    {
      planet_name: DataTypes.STRING,
      mass: DataTypes.INTEGER,
      gravity: DataTypes.INTEGER,
      temperature: DataTypes.INTEGER,
      distance_from_earth: DataTypes.INTEGER,
      rotation_duration: DataTypes.INTEGER,
      revolution_duration: DataTypes.INTEGER,
      no_of_moons: DataTypes.INTEGER,
      structure: DataTypes.STRING,
      map_image: DataTypes.STRING,
      no_of_satellites: DataTypes.INTEGER,
      rotational_speed: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "planets",
    }
  );
  return Planet;
};
