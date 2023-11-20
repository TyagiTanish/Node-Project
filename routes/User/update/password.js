const userSchema=require('../../../models/UserLogin/userSchema');

const bcrypt = require("bcrypt");
const password=async(req,res)=>{
       const id=req.id;
      
       const data=await userSchema.findById({_id:id});
       const result=await bcrypt.compare( req.body.Password,data.Password);
      if(!result){
         res.send(false)
      }
      else{
        await userSchema.findByIdAndUpdate(id,{
                Password:req.body.Password
        })
        res.send(true);
      }
}
module.exports=password;