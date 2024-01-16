const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req, res) => {
  if (!req.id) {
    const hotel = await hotelDetails.findOne({ ownerId: req.user._id });
    const rooms = hotel.rooms;
    const filteredRoom = rooms?.filter(
      (room) => String(room._id) !== String(req.query.roomid)
    );
    await hotelDetails.findByIdAndUpdate(
      { _id: hotel._id },
      {
        $set: {
          rooms: filteredRoom,
        },
      }
    );
    res.send(true);
  } else {
    const hotel = await hotelDetails.findOne({ _id: req.id });
    const rooms = hotel.rooms;
    const filteredRoom = rooms?.filter(
      (room) => String(room._id) !== String(req.query.roomid)
    );
    await hotelDetails.findByIdAndUpdate(
      { _id: hotel._id },
      {
        $set: {
          rooms: filteredRoom,
        },
      }
    );
    res.send(true);
  }
};
