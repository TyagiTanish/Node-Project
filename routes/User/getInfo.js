const hotelDetails=require('../../models/Hotel/hotelSchema');
module.exports=async(req,res)=>{

   const data= await hotelDetails.find({_id:req.id});
 
   const user = req.user;



   const result2=[
      {
          user:user
      },
      {
          hotelInfo:data
      }
  ]

   res.send(result2)
}