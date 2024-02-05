const bookings = require("../../models/Billing/bookingSchema");
const payments = require("../../models/Billing/paymentSchema");
const htmlPdfConvert = require("../payment/html-pdf-convert");
const ejs = require('ejs')
module.exports = async (req,res) =>{
const bookingData = await bookings.findOne({_id:req.query.bookingId}).populate('hotelId').populate('roomId').populate('userId')
const paymentDetails = await payments.findOne({bookingId:req.body._id});
const value = bookingData?.hotelId?.rooms.find((room)=>(String(room?._id) === String(bookingData?.roomId)))
    const template = await ejs.renderFile(`views/CompleteBill.ejs`, {
        hotelName:bookingData?.hotelId?.hotelName,
        addressLine1:`${bookingData?.hotelId?.city},${bookingData?.hotelId?.state}`,
        addressLine2:`${bookingData?.hotelId?.pinCode},${bookingData?.hotelId?.country}`,
        transactionId:paymentDetails?.transactionId,
        amount:value?.price,
        days:bookingData?.totalDays,
        date:Date.now(),
        totalRooms:bookingData?.totalRooms,
        roomType:value?.roomType,
        email:bookingData?.email,
        phone:bookingData?.phone,
        name:bookingData?.fullName,
        totalRoomPrice:bookingData?.price,
      });
      key = `${paymentDetails?.transactionId}-${Date.now}.pdf`;
      const buffer = await htmlPdfConvert(template, key);
    res.send(buffer)
}