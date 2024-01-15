const hotelDetails=require('../../../models/Hotel/hotelSchema')
module.exports=async (req,res)=>{
   const data = await hotelDetails.findByIdAndDelete({_id:req.id});
// console.log("true");
   res.send(true);
}