"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class crew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.missions, {
        as: "mission",
        foreignKey: "mission_id",
      });
    }
  }
  crew.init(
    {
      astronaut_id: DataTypes.INTEGER,
      mission_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "crews",
    }
  );
  return crew;
};
