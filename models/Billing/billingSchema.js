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
  totalRooms: {
    type: String,
  },
  bookFrom: {
    type: String,
  },
  bookTo: {
    type: String,
  },
  totalDays: {
    type: String,
  },
  totalGuests: {
    type: String,
  },
  roomId: {
    type: String,
  },
  hotelId: {
    type: String,
  },
});
const billingDetails = mongoose.model("billingdetails", billingSchema);
module.exports = billingDetails;
