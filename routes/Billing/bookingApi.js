const bookings = require("../../models/Billing/bookingSchema");
const hotelDetails = require("../../models/Hotel/hotelSchema");

/**
 *
 * @method  POST
 * @api  /bookRoom
 * @description
 */

const post = async (req, res) => {
  try {
    const {
      data: {
        fullName,
        email,
        phone,
        guestName,
        guestEmail,
        totalGuests,
        startdate,
        enddate,
        totalDays,
        totalRooms,
        roomId,
        price,
        currency
      },
      hotelId,
    } = req.body;
    const ownerId = await hotelDetails.findOne({ _id: hotelId });

    const result = new bookings({
      fullName,
      email,
      phone,
      guestName,
      guestEmail,
      totalGuests,
      bookFrom: startdate,
      bookTo: enddate,
      totalDays,
      totalRooms,
      roomId,
      price,
      hotelId,
      userId: req.user._id,
      ownerId: ownerId.ownerId,
      currency
    });
    const id = await result.save();
   
    return res.send({ message: "Data Entered Successfull", bookingId: id._id });
  } catch (err) {
    res.send(err);
  }
};
module.exports = post;
