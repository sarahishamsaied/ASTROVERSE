"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rockets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rocket_name: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      capacity: {
        type: Sequelize.INTEGER,
      },
      rocket_type: {
        type: Sequelize.STRING,
      },
      thrust: {
        type: Sequelize.INTEGER,
      },
      fuel: {
        type: Sequelize.STRING,
      },
      velocity: {
        type: Sequelize.INTEGER,
      },
      mass: {
        type: Sequelize.INTEGER,
      },
      momentum: {
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
    await queryInterface.dropTable("rockets");
  },
};
