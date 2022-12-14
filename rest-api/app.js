const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const errorsControllers = require("./controllers/error");
const db = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorsControllers.getPageNotFound);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

db.sync({ force: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
