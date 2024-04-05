const bookings = require("../../../models/Billing/bookingSchema");

module.exports = async (req, res) => {
  try {
    const user = req.user;
    if (user?.role == 'superAdmin') {
      const result = await bookings
        .find()
        .populate("ownerId")
        .populate("hotelId")
        .populate("roomId")
        .populate("paymentId");
      res.send(result);
    } else {
      const result = await bookings
        .find({ ownerId: user._id })
        .populate("ownerId")
        .populate("hotelId")
        .populate("roomId")
        .populate("paymentId");
      res.send(result);
    }

  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
