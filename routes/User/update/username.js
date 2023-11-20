const userSchema=require('../../../models/UserLogin/userSchema')


const username=async(req,res)=>{
  
    const id=req.id;
    console.log(id);
   const name=req.body.Name;
    const data=await userSchema.findByIdAndUpdate(id,{
        Name:name
    } )
    if(data)
    {
       
        res.send("username updated successfully");
    }


}
module.exports=username;