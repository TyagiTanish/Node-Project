const bookings = require('../../../models/Billing/bookingSchema');

const hotelDetails=require('../../../models/Hotel/hotelSchema')

module.exports=async(req,res)=>{
    const user=req.user;
  // const data=await bookings.findByIdAndDelete(req.id);
  // console.log(data)

     const data= await bookings.findByIdAndUpdate(req.id,{
        status:"rejected"
    }).populate('ownerId').populate('hotelId').populate('userId')
    const result=await bookings.find({ownerId:user._id,status:"pending"});
    res.send(result)
}