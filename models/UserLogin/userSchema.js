const mongoose = require("mongoose");
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
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const userDetails = mongoose.model("UserDetails", userSchema);
module.exports = userDetails;
