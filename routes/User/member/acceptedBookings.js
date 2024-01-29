const bookings = require('../../../models/Billing/bookingSchema');

module.exports=async(req,res)=>{
    const user=req.user;
    const result=await bookings.find({ownerId:user._id,status:"accepted"}).populate('ownerId').populate('hotelId').populate("roomId");
    const data=result.filter((item)=>{
        return item.hotelId!=null
    })
   
    res.send(data)
}        
 /**
 * @method GET
 * @api /acceptedBookings/externalRelation
 * @description
 *  - To get booking Details that are accepted by the Owner
 */