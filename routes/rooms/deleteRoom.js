const hotelDetails = require("../../models/Hotel/hotelSchema");
const fs = require("fs");
module.exports = async (req, res) => {
  // console.log(req.query.photos);
  const photos = req.query.photos;
  console.log(req.id);
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
    photos?.map((photo) => {
      fs.unlink(photo.path, (err) => {
        if (err) console.log(err);
        else {
          console.log(`${photo.path} Deleted successfully`);
        }
      });
      // console.log(photo.path);
    });
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
    photos.map((photo) => {
      fs.unlink(photo.path, (err) => {
        if (err) console.log(err);
        else {
          console.log(`${photo.path} Deleted successfully`);
        }
      });
    });
    res.send(true);
  }
};
