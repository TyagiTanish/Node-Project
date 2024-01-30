/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const bookings = require("../../models/Billing/bookingSchema");
const payments = require("../../models/Billing/paymentSchema");
module.exports = async (req, res) => {
  try {
    if (!req.id) {
      const data = await bookings
        .find({ userId: req.user?._id })
        .populate("hotelId");
      res.send(data);
    } else {
      const data = await bookings
        .find({ _id: req.id })
        .populate("hotelId")
        .populate("userId");
      // console.log(data);
      // const bookingId = data[0]._id;
      // console.log(bookingId);
      // const paymentData = await payments.find();
      // const id = paymentData[0].bookingId;
      // console.log(paymentData);
      // const Data = await payments.find({ bookingId: bookingId });
      // data.price = paymentData[0]?.amount;
      // console.log(Data);
      res.send(data);
    }
  } catch (err) {
    console.log(err);
  }
};
