const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://leanborre:borre2023@cluster0.hiw60tk.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};

module.exports = mongoConnect;
module.exports = getDb;

/* *** MYSQL DATABASE *** */
/* const { Sequelize } = require("sequelize");

const db = new Sequelize("node-complete", "root", "Coqui2024$", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
 */
