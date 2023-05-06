const S = require("sequelize");
const db = require("../util/database");

const OrderItem = db.define("orderItem", {
  id: {
    type: S.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: S.INTEGER,
});

module.exports = OrderItem;
