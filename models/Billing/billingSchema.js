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
  totalGuests: {
    type: String,
  },
  roomId: {
    type: String,
  },
  hotelId: {
    type: String,
  },
  userId: {
    type: String,
  },
});
const billingDetails = mongoose.model("billingdetails", billingSchema);
module.exports = billingDetails;
