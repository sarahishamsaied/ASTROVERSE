const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("astroverse-dev", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

module.exports = sequelize;
