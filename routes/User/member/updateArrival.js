const bookings = require("../../../models/Billing/bookingSchema")


module.exports=async(req,res)=>{
   await bookings.findByIdAndUpdate(req.id,{
    arrival:req.body.value
   })
   res.send(true)
}
