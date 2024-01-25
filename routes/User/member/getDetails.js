const hotelDetails = require("../../../models/Hotel/hotelSchema");

/**
 * 
 * @method GET
 * @api /getDetails/:id
 * @description  - to give all details of particular hotel 
 */



module.exports=async(req,res)=>{
   
    const data=await hotelDetails.findById(req.id);
    // const result=data?.rooms.filter((item)=>{
    //     return item._id=req.body.roomId
    // })
    res.send(data)
}