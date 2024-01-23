const billingDetails = require("../../../models/Billing/billingSchema");
const hotelDetails = require("../../../models/Hotel/hotelSchema");

module.exports=async(req,res)=>{
    const user=req.user;
    const id=req.id;
    const data= await billingDetails.findByIdAndUpdate(id,{
        status:"accepted"
    })
    const result1=await hotelDetails.findOne({ownerId:user?.id});
    const result2=await billingDetails.find({hotelId:result1?._id});
    console.log(result2)
    res.send(result2)
}