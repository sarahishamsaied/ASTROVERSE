"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("missions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mission_name: {
        type: Sequelize.STRING,
      },
      rocket_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "rocket",
          key: "id",
        },
      },
      lat: {
        type: Sequelize.INTEGER,
      },
      lng: {
        type: Sequelize.INTEGER,
      },
      phase: {
        type: Sequelize.STRING,
      },
      planet_id: {
        type: Sequelize.STRING,
      },
      objective: {
        type: Sequelize.STRING,
      },
      launch_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("missions");
  },
};
