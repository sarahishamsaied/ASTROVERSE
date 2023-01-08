"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("maintenances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rocket_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "rocket",
          key: "id",
        },
      },
      technician_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "astronauts",
          key: "id",
        },
      },
      status: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("maintenances");
  },
};
