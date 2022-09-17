const { Sequelize } = require("sequelize");

const db = new Sequelize("node-complete", "root", "Celestiall22", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
