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
  hotelId: {
    type: String,
  },
  roomId: {
    type: String,
  },
  price: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
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
    type: mongoose.Types.ObjectId,
    ref: "hoteldetails",
  },
  paymentStatus: {
    type: String,
    default: "unpaid",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "userdetails",
  },
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "userdetails",
  },
  arrival:{
    type:String,
    default:""
  },
  reminder:{
    type:String,
    default:'false'
  }
});
const bookings = mongoose.model("bookings", bookingSchema);
module.exports = bookings;
