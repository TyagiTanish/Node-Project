const hotelDetails = require('../../../../models/Hotel/hotelSchema');
const userDetails=require('../../../../models/Hotel/hotelSchema');
module.exports=async(req,res)=>{
    const user = req.user;
//    const data= await hotelDetails.findOne({email:user.email})
    console.log(user._id);
    const data=await hotelDetails.find({ownerId:user._id});
    console.log(data);
    res.send(data)
}