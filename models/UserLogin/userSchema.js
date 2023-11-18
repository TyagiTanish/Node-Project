const mongoose = require("mongoose");
const userSchema =  mongoose.Schema(
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
  },
  { timestamps: true }
);
const userDetails = mongoose.model("userdetails", userSchema);
module.exports = userDetails;
