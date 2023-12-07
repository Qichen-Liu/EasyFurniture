const mongoose = require("mongoose");
const { DATABASE, MONGODB } = require("./config");

const db = MONGODB;

mongoose.connect(db, {
  //useUnifiedTopology: true,
  //useNewUrlParser: true,
  dbName: DATABASE,
  maxPoolSize: 100,
});

mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open to " + MONGODB);
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination",
    );
    throw new Error("Exit");
  });
});
