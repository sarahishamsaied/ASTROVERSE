"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    static associate({ comments, users }) {
      this.hasMany(comments, {
        as: "comments",
        foreignKey: "announcement_id",
      });
      this.belongsTo(users, {
        as: "author",
        foreignKey: "author_id",
      });
    }
  }
  Announcement.init(
    {
      author_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "announcements",
    }
  );

  return Announcement;
};
