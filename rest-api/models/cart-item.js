const S = require("sequelize");
const db = require("../util/database");

const CartItem = db.define("cartItem", {
  id: {
    type: S.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: S.INTEGER,
});

module.exports = CartItem;
