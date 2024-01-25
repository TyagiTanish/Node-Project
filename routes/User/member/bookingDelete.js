const bookings = require('../../../models/Billing/bookingSchema');

const hotelDetails=require('../../../models/Hotel/hotelSchema')

module.exports=async(req,res)=>{
    const user=req.user;
  const data=await bookings.findByIdAndDelete(req.id);
  console.log(data)
  const result=await bookings.find({ownerId:user._id});
    res.send(result)

  
}