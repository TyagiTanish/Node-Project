const hotelDetails = require('../../../../models/Hotel/hotelSchema');
const userDetails=require('../../../../models/Hotel/hotelSchema');
module.exports=async(req,res)=>{
    try {
        const user = req.user;
        const data=await hotelDetails.find({ownerId:user._id});
        const result=[
            {
                user:user
            },
            {
                hotelInfo:data
            }
        ]
        res.send(result)
        
    } catch (error) {
        res.send(error)
    }

}