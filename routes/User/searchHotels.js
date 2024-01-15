const hotelDetails = require('../../models/Hotel/hotelSchema');

module.exports=async(req,res)=>{
<<<<<<< HEAD
    try {
        const user = req.user;
        const data=await hotelDetails.find({ownerId:user._id});
        res.send(data)
    } catch (error) {
        res.send(error)
    }
   
=======
    const user = req.user;



    const data=await hotelDetails.find({ownerId:user._id});
    

    res.send(data)
>>>>>>> 3301d1356c7076de9d89e8ef794a11f3687b177e
}