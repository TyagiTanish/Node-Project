const mongoose = require("mongoose");
<<<<<<< HEAD
const userSchema =  mongoose.Schema(
=======
const encrypt = require("./pre/save");
// const methods = require("./methods");

const userSchema = new mongoose.Schema(
>>>>>>> aeb6b3d1b19cf5d32dac6415e4fb1546af61e230
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
<<<<<<< HEAD
=======
      required: true,
    },
    Password: {
      type: String,
>>>>>>> aeb6b3d1b19cf5d32dac6415e4fb1546af61e230
      required: true,
    },
  },
  { timestamps: true }
);
<<<<<<< HEAD
=======
userSchema.pre("save", encrypt);
>>>>>>> aeb6b3d1b19cf5d32dac6415e4fb1546af61e230
const userDetails = mongoose.model("userdetails", userSchema);
module.exports = userDetails;
