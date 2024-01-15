const userDetails = require("../../../models/UserLogin/userSchema");

module.exports=async(req,res)=>{
    try{
        const result1=await userDetails.findByIdAndUpdate(req.body._id,{
            name:req.body.name,
            email:req.body.email
        })
        const result2=await userDetails.find({_id:req.body._id});
        res.send(result2)
    }catch(err){
        res.send(err)
    }
}