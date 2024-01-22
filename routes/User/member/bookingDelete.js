const billingSchema=require('../../../models/Billing/billingSchema')
const hotelDetails=require('../../../models/Hotel/hotelSchema')

module.exports=async(req,res)=>{
    const user=req.user;
  const data=await billingSchema.findByIdAndDelete(req.id);
  const result1=await hotelDetails.findOne({ownerId:user?.id});
  const result2=await billingSchema.find({hotelId:result1?._id});
  console.log('delete is ...........',result2)
  res.send(result2)
}