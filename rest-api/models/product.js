const S = require("sequelize");
const db = require("../util/database");

const Product = db.define("product", {
  id: {
    type: S.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: S.STRING,
  price: {
    type: S.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: S.STRING,
    allowNull: false,
  },
  description: {
    type: S.STRING,
    allowNull: false,
  },
});

module.exports = Product;
