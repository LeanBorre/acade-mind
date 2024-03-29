const S = require("sequelize");
const db = require("../util/database");

const Cart = db.define("cart", {
  id: {
    type: S.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
