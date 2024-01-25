/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const bookings = require("../../models/Billing/bookingSchema");
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

      res.send(data);
    }
  } catch (err) {
    console.log(err);
  }
};
