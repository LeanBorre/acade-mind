const S = require("sequelize");
const db = require("../util/database");

const Order = db.define("order", {
  id: {
    type: S.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Order;
