const mongoose = require("mongoose");
const connect = async () => {
<<<<<<< HEAD
  conn = await mongoose.connect("mongodb://localhost:27017/",{dbName:'OyoProject'});
=======
  // conn = await mongoose.connect("mongodb://localhost:27017", {
  //   dbName: "OyoProject",
  // });
  conn = await mongoose.connect("mongodb://127.0.0.1:27017/OyoProject");
>>>>>>> aeb6b3d1b19cf5d32dac6415e4fb1546af61e230
  if (conn) {
    console.log("Database Connected.");
  } else {
    console.log("Something went wrong while connecting to the database");
  }
};
module.exports = connect;
