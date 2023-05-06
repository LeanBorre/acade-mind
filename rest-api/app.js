const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const errorsControllers = require("./controllers/error");
const mongoConnect = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  /*  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err)); */
});

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorsControllers.getPageNotFound);

mongoConnect(() => {
  app.listen(3000);
  console.log("App listening on port 3000...");
});

/* ***MYSQL SERVER***  */
/* 
const db = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");

// product-user association
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
// Cart association
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
// Order association
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

db.sync({ force: false })
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "Leandro",
        email: "leandro.e.borrelli@gmail.com",
      });
    }
    return Promise.resolve(user);
  })
  .then((user) => {
    // console.log(user);
    return user.createCart();
  })
  .then((cart) => {
    app.listen(3000);
    console.log("App listening on port 3000...");
  })
  .catch((err) => {
    console.log(err);
  }); */
