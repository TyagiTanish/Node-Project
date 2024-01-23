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
  startDate: {
    type: String,
  },
  endDate:{
    type:String
  },
  days: {
    type: String,
  },
  totalGuests: {
    type: String,
  },
  hotelId:{
    type:String
  },
  roomId:{
      type:String
  
 },
 status:{
  type:String
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
    ref:'hotelDetails'
  },
  paymentStatus: {
    type: String,
    default: "unpaid",
  },
<<<<<<< HEAD:models/Billing/bookingSchema.js
  userId:{
    type:mongoose.Types.ObjectId,
    ref:'userDetails'
  }
=======
  userId: {
    type: String,
  },
>>>>>>> a0f5ac07db2ceb68b8964eb70eac0c7b51399aa9:models/Billing/billingSchema.js
});
const bookings = mongoose.model("bookings", bookingSchema);
module.exports = bookings;
