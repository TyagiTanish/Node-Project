const billingSchema=require('../../../models/Billing/billingSchema');
const hotelDetails=require('../../../models/Hotel/hotelSchema')
module.exports=async(req,res)=>{
    const user=req.user;
   
    const data=await hotelDetails.findOne({ownerId:user.id});
    const result=await billingSchema.find({hotelId:data._id});
    res.send(result)
} 