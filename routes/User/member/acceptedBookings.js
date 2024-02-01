const bookings = require('../../../models/Billing/bookingSchema');

module.exports=async(req,res)=>{
    try{
        
        if(Object.keys(req.query).length === 0){
            const user=req.user;
            
            const result=await bookings.find({ownerId:user._id}).populate('ownerId').populate('hotelId').populate("roomId");
          
           
            res.send(result)
        }
        else{
            
            const limit = req.query.limit;
            const page = req.query.page;
            const sortby = req.query.sortby === "asc" ? 1 : -1;
            const orderby = req.query.orderby;
            const search=req.query.search;
            
            const user=req.user;
         
            if(search===""){
                const result=await bookings.find({ownerId:user._id})
                .limit(limit)
                .skip(limit * page)
                .sort({ [orderby]: sortby })
                .populate('ownerId').populate('hotelId').populate("roomId");
               res.send(result)
            }
            
           else{
            const result=await bookings.find({ownerId:user._id,  $or: [
                { 'hotelId.hotelName': { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: "i" } },
                { bookFrom: { $regex: search, $options: "i" } },
        
                { bookTo: { $regex: search, $options: "i" } },
                
              ],})
            .limit(limit)
            .skip(limit * page)
            .sort({ [orderby]: sortby })
            .populate('ownerId').populate('hotelId').populate("roomId");
            res.send(result)
           }
        
         
        }
     
    }
    catch(error){
        res.send(error)
    }
}        
 /**
 * @method GET
 * @api /acceptedBookings
 * @description
 *  - To get booking Details that are accepted by the Owner
 */