const userDetails = require("../../models/UserLogin/userSchema")
module.exports = async (req,res)=>{
 
    try {
        const result =  await userDetails.findOne({Email:req.body.Email});
        res.send(result);
    } catch (error) {
        console.log(Error);
    }
  
}