const hotelDetails= require('../../../models/Hotel/hotelSchema');
const userDetails=require('../../../models/UserLogin/userSchema')
module.exports=async(req,res)=>{
    if(req?.file?.path===undefined){
        const data= await hotelDetails.findByIdAndUpdate(req.body._id,{
            hotelName:req.body.hotelName,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            pinCode:req.body.pinCode,
            discription:req.body.discription,
          
        })
        const result1=await userDetails.findByIdAndUpdate(req.body.ownerId,{
            name:req.body.name,
            email:req.body.email
        })
        const result2=await hotelDetails.find({_id:req.body._id});
        const newResult1=await userDetails.findOne({_id:req.body.ownerId});
       
        res.send(result2)
  
    }
   else{
    const data= await hotelDetails.findByIdAndUpdate(req.body._id,{
        hotelName:req.body.hotelName,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        pinCode:req.body.pinCode,
        discription:req.body.discription,
        photo: req?.file?.path,
    })
    const result1=await userDetails.findByIdAndUpdate(req.body.ownerId,{
        name:req.body.name,
        email:req.body.email
    })
    const newResult1=await userDetails.findOne({_id:req.body.ownerId});
    const result2=await hotelDetails.find({_id:req.body._id});
    
 
    res.send(result2)
   }

    
    
}