const hotelDetails=require('../../../models/Hotel/hotelSchema')
module.exports=async(req,res)=>{
   await hotelDetails.findByIdAndUpdate(req.id,{
        amenities:req.body
    })
   
    res.send(true)
}



/**
 *
 * @method POST
 * @api /updateAmeneties
 * @description  - To update the Hotel amenities 
 */