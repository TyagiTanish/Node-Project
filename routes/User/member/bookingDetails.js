const bookings = require('../../../models/Billing/bookingSchema');

module.exports=async(req,res)=>{
    const user=req.user;
    const result=await bookings.find({ownerId:user._id});
  
    res.send(result)
}        