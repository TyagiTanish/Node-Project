const userSchema=require('../../../models/UserLogin/userSchema');

const bcrypt = require("bcrypt");

const password=async(req,res)=>{
      


        console.log(req.body.newpassword);
       const id=req.id;
       const password = await bcrypt.hash(req.body.newpassword, 10);
       const data=await userSchema.findById({_id:id});
       const result=await bcrypt.compare( req.body.Password,data.password);
      if(!result){
         res.send(false)
      }
      else{
        await userSchema.findByIdAndUpdate(id,{
                Ppassword:password
        })
        res.send(true);
        console.log("done");
      }
}
module.exports=password;