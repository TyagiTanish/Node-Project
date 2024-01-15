const hotelDetails = require('../../../../models/Hotel/hotelSchema');
const userDetails=require('../../../../models/Hotel/hotelSchema');
module.exports=async(req,res)=>{
    const user = req.user;
//    const data= await hotelDetails.findOne({email:user.email})
    const data=await hotelDetails.find({ownerId:user._id});
   
    res.send(data)
}