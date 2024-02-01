const hotelDetails = require('../../models/Hotel/hotelSchema');

module.exports=async(req,res)=>{
    const user = req.user;


    if(Object.keys(req.query).length === 0){
        const data=await hotelDetails.find({ownerId:user._id});
        res.send(data)
    }
  
   else{
    const search=req.query.search;
    if(search===""){
        const data=await hotelDetails.find({ownerId:user._id});
        res.send(data)
    }
    else{
        const data=await hotelDetails.find({ownerId:user._id, $or: [
            { hotelName: { $regex: search, $options: 'i' } },
           
            
          ]});
          res.send(data)
    }
   }

   
}