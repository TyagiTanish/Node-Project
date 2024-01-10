const hotelDetails = require('../../models/Hotel/hotelSchema');

module.exports=async(req,res)=>{
    const user = req.user;
    console.log(user);

    console.log(user._id);
    const data=await hotelDetails.find({ownerId:user._id});
    console.log(data);

    res.send(data)
}