"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ announcements }) {
      this.belongsTo(announcements, {
        as: "announcement",
        foreignKey: "announcement_id",
      });
    }
  }
  Comment.init(
    {
      comment_author_id: DataTypes.INTEGER,
      announcement_id: DataTypes.INTEGER,
      comment_body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comments",
    }
  );
  return Comment;
};
