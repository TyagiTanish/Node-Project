const hotelDetails=require('../../models/Hotel/hotelSchema');
module.exports=async(req,res)=>{
   console.log(req.id);
   const data= await hotelDetails.find({_id:req.id});
   console.log('data is ......',data);
   const user = req.user;

console.log(user);
   console.log(user._id);

   const result2=[
      {
          user:user
      },
      {
          hotelInfo:data
      }
  ]
  console.log(result2);
   res.send(result2)
}