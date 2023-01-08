"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("planets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      planet_name: {
        type: Sequelize.STRING,
      },
      mass: {
        type: Sequelize.INTEGER,
      },
      gravity: {
        type: Sequelize.INTEGER,
      },
      temerature: {
        type: Sequelize.INTEGER,
      },
      distance_from_earth: {
        type: Sequelize.INTEGER,
      },
      rotation_duration: {
        type: Sequelize.STRING,
      },
      revolution_duration: {
        type: Sequelize.INTEGER,
      },
      no_of_moons: {
        type: Sequelize.INTEGER,
      },
      structure: {
        type: Sequelize.STRING,
      },
      map_image: {
        type: Sequelize.STRING,
      },
      no_of_satellites: {
        type: Sequelize.STRING,
      },
      rotational_speed: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("planets");
  },
};
