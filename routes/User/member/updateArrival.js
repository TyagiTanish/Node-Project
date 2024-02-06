const bookings = require("../../../models/Billing/bookingSchema")


module.exports=async(req,res)=>{



   if(req.body.value==="Canceled"){
      await bookings.findByIdAndUpdate(req.id,{
         arrival:req.body.value,
         status:req.body.value
        })
   }
   else{
      await bookings.findByIdAndUpdate(req.id,{
         arrival:req.body.value
        })
   }

   res.send(true)
}
