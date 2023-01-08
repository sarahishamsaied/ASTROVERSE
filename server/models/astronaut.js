"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class astronaut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  astronaut.init(
    {
      uid: DataTypes.INTEGER,
      login_id: DataTypes.STRING,
      role: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      is_admin: DataTypes.BOOLEAN,
      years_of_experience: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "astronauts",
    }
  );
  return astronaut;
};
