const userDetails = require("../../../../models/UserLogin/userSchema")

module.exports = async (req,res) =>{
    try {
        const data = await userDetails.findOne({email:req.body.email});
        if(data){
            res.send(true);
        }else{
            res.send("false");
        }
    } catch (error) {
        res.send(error)
    }
   
}