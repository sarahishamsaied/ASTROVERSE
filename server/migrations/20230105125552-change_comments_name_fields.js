"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn("comments", "body", "comment_body");
    queryInterface.renameColumn("comments", "author_id", "comment_author_id");
  },

  async down(queryInterface, Sequelize) {
    queryInterface.renameColumn("comments", "comment_body", "body");
    queryInterface.renameColumn("comments", "comment_author_id", "author_id");
  },
};
