const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://beyzaaribas:wBnO1VbK9u1X3ytf@cluster0.pxpc52b.mongodb.net/";

const db = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("MongoDB connection success");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};

module.exports = db;

