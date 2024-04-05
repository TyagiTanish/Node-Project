const bookings = require("../../../models/Billing/bookingSchema");

module.exports = async (req, res) => {
  try {
    const user = req.user;
    const result = await bookings
      .find({ hotelId: req?.id })
      .populate("ownerId")
      .populate("hotelId")
      .populate("roomId")
      .populate("paymentId");
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
