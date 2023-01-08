"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      astronaut_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "astronauts",
          key: "id",
        },
      },
      mission_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "missions",
          key: "id",
        },
      },
      priority: {
        type: Sequelize.STRING,
      },
      task_name: {
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
    await queryInterface.dropTable("tasks");
  },
};
