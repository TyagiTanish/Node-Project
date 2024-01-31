const userDetails = require("../../../models/UserLogin/userSchema");

/**
 *
 * @method GET
 * @api /getAllUsers
 * @description  - to give all the Members registered in userSchema
 */

module.exports = async (req, res) => {
 
  //   console.log(data);


  try{
        
    if(Object.keys(req.query).length === 0){
        const data = await userDetails.find({ role: "customer" });
        res.send(data);
    }
    else{
        
        const limit = req.query.limit;
        const page = req.query.page;
        const sortby = req.query.sortby === "asc" ? 1 : -1;
        const orderby = req.query.orderby;
        const search=req.query.search;
        
        const user=req.user;
     
        if(search===""){
            const data = await userDetails.find({ role: "customer" })
            .limit(limit)
            .skip(limit * page)
            .sort({ [orderby]: sortby });
           res.send(data)
        }
       
       else{
        const data=await userDetails.find({role: "customer" ,  $or: [
            { name: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: "i" } },
            { phone: { $regex: search, $options: "i" } },
    
         
            
          ],});
        res.send(data)
       }
    
     
    }
 
}
catch(error){
    res.send(error)
}
}        

