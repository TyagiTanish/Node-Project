const bookings = require('../../../models/Billing/bookingSchema');

module.exports=async(req,res)=>{
    const user=req.user;
    const result=await bookings.find({ownerId:user._id}).populate("hotelId");

    const data=result.filter((item)=>{
        return item.hotelId!=null
    })
    console.log('data is .............',data)
    res.send(data)
    
}        