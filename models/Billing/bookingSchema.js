const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  price: {},
  totalRooms: {
    type: String,
  },
  bookFrom: {
    type: String,
  },
  bookTo: {
    type: String,
  },
  days: {
    type: String,
  },
  // totalGuests: {
  //   type: String,
  // },
  // hotelId:{
  //   type:String
  // },
  // roomId: {
  //   type: String,
  // },
  status: {
    type: String,
  },
  totalDays: {
    type: String,
  },
  guestName: {
    type: String,
  },
  guestEmail: {
    type: String,
  },
  totalGuests: {
    type: String,
  },
  roomId: {
    type: mongoose.Types.ObjectId,
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hoteldetails",
    // type: mongoose.Types.ObjectId,
    // ref: "hotelDetails",
  },
  paymentStatus: {
    type: String,
    default: "unpaid",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userdetails",
  },
});
const bookings = mongoose.model("bookings", bookingSchema);
module.exports = bookings;
