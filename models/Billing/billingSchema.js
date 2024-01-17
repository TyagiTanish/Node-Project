const mongoose = require("mongoose");
const billingSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  checkIn: {
    type: String,
  },
  checkOut: {
    type: String,
  },
  quatity: {
    type: String,
  },
  bookFrom: {
    type: String,
  },
  bookTo: {
    type: String,
  },
  guests: {
    type: String,
  },
});
const billingDetails = mongoose.model("billingDetails", billingSchema);
module.exports = billingDetails;
