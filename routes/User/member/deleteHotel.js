const hotelDetails=require('../../../models/Hotel/hotelSchema');
const userSchema=require('../../../models/UserLogin/userSchema')
module.exports=async (req,res)=>{
   await hotelDetails.findByIdAndDelete({_id:req.id});
 
   const data = await hotelDetails.find({ownerId:req.user._id})

   if(data.length===0)
   {
      await userSchema.findByIdAndUpdate(req.user._id,{
         $set:{
            role:'customer'
         }
      })
      res.send(false);
   }

   else{
      res.send(true);
   }
   
}