const mongoose = require("mongoose");
const encrypt = require("./pre/save");
// const methods = require("./methods");
const methods = require('./methods')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    isDeleted: {
      type: String,
      default: false,
    },
    dashboard: []
  },
  { timestamps: true }
);

Object.assign(userSchema.methods, methods);
userSchema.pre("save", encrypt);

const userDetails = mongoose.model("userdetails", userSchema);
module.exports = userDetails;
