const mongoose = require("mongoose");
const encrypt = require("./pre/save");
// const methods = require("./methods");
const methods = require('./methods')
const userSchema = new mongoose.Schema(
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
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

Object.assign(userSchema.methods, methods);
userSchema.pre("save", encrypt);

const userDetails = mongoose.model("userdetails", userSchema);
module.exports = userDetails;
