
const hotelDetails = require('../../../../models/Hotel/hotelSchema');
const userSchema=require('../../../../models/UserLogin/userSchema');

module.exports=async(req,res)=>{
    const user = req.user;
    const data=await hotelDetails.find({ownerId:user._id});
    res.send(data)
}

