const S = require("sequelize");
const db = require("../util/database");

const User = db.define("user", {
  id: {
    type: S.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: S.STRING,
    allowNull: false,
  },
  email: {
    type: S.STRING,
    allowNull: false,
  },
});

module.exports = User;
