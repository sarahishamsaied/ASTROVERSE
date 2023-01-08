"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class maintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  maintenance.init(
    {
      rocket_id: DataTypes.INTEGER,
      technician_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "maintenances",
    }
  );
  return maintenance;
};
