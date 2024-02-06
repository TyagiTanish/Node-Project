const bookings = require("../../../models/Billing/bookingSchema");

module.exports=async(req,res)=>{
    const data = await bookings
    .find({ userId: req.user?._id })
    .populate("hotelId");

  res.send(data[0]);
}