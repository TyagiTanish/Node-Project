const mongoose = require("mongoose");
const connect = async () => {
  // conn = await mongoose.connect("mongodb://localhost:27017", {
  //   dbName: "OyoProject",
  // });
  conn = await mongoose.connect("mongodb://admin:JKuighk97%21%40klnjgv@192.168.1.190:27017/?retryWrites=true&loadBalanced=false&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256",{
    dbName:'OyoProject'
  });
  if (conn) {
    console.log("Database Connected.");
  } else {
    console.log("Something went wrong while connecting to the database");
  }
};
module.exports = connect;
