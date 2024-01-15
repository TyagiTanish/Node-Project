const hotelDetails = require('../../models/Hotel/hotelSchema');

module.exports=async(req,res)=>{
    try {
        const user = req.user;
        const data=await hotelDetails.find({ownerId:user._id});
        res.send(data)
    } catch (error) {
        res.send(error)
    }
   
}