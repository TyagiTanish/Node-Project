const bookings = require("../../../models/Billing/bookingSchema");
const billingDetails = require("../../../models/Billing/bookingSchema");
const hotelDetails = require("../../../models/Hotel/hotelSchema");
const payments = require('../../../models/Billing/paymentSchema');
const BookingInvoiceNodemailer = require("../../payment/BookingInvoiceNodemailer");
/**
 * @method PUT
 * @api  /bookingAccept/:id
 * @description  -changes the status of booking request to accepted
 *  -
 */



module.exports=async(req,res)=>{
    const user=req.user;
    const id=req.id;

    const data= await bookings.findByIdAndUpdate(id,{
        status:"accepted"
    }).populate('ownerId').populate('hotelId').populate('userId')

    const paymentDetails = await payments.findOne({bookingId:id})
    const hotelName = data?.hotelId?.hotelName;
    const email = data?.email;
    const phone = data?.phone;
    const addressLine1 = `${data?.hotelId?.city},${data?.hotelId?.state}`;
    const  addressLine2 = `${data?.hotelId?.pinCode},${data?.hotelId?.country}`;            
    const transactionId = paymentDetails?.transactionId;
    const date = Date.now();
    const value = data?.hotelId?.rooms.find((room)=>(String(room?._id) === String(data?.roomId)))
    var name = data?.fullName;
    var roomType = value?.roomType;
    var amount = value?.price;
    var totalRooms = data?.totalRooms;
    var days = data?.totalDays;
    var totalRoomPrice = amount*totalRooms*days;
    BookingInvoiceNodemailer(hotelName,addressLine1,addressLine2,transactionId,date,roomType,amount,totalRooms,days,phone,email,name,totalRoomPrice);

    const result=await bookings.find({ownerId:user._id,status:"pending"});
    res.send(result)
}