const bookings = require('../../../models/Billing/bookingSchema');

module.exports=async(req,res)=>{
    const user=req.user;
    const result=await bookings.find({ownerId:user._id,status:"accepted"}).populate('ownerId').populate('hotelId');
  
    res.send(result)
}        
 /**
 * @method GET
 * @api /acceptedBookings/externalRelation
 * @description
 *  - To get booking Details that are accepted by the Owner
 */