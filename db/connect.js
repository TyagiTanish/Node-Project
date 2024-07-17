const mongoose = require("mongoose");
const connect = async () => {
  // conn = await mongoose.connect("mongodb://localhost:27017", {
  //   dbName: "OyoProject",
  // });
  conn = await mongoose.connect("mongodb+srv://priyanshu05:CdIedyYoGee1y0MQ@cluster0.uzhu2.mongodb.net/",{
    dbName:'OyoProject'
  });
  if (conn) {
    console.log("Database Connected.");
  } else {
    console.log("Something went wrong while connecting to the database");
  }
};
module.exports = connect;
