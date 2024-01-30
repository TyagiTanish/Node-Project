/**
 *
 * @method  PUT
 * @api  /setRoomQuantity
 * @description The memeber is now able to increase or decrease the Quantity of the rooms
 */

const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req, res) => {
  try {
    if (req.id) {
      const result = await hotelDetails.find({ _id: req.id });
      console.log(result[0]);
      if (req.body.decrease) {
        const rooms = result[0]?.rooms.map((item, i) => {
          if (item?._id == req.body.roomId) {
            item.roomQuantity = +item.roomQuantity - 1;
          }
          return item;
        });
        await hotelDetails.findByIdAndUpdate(
          { _id: result[0]._id },
          {
            $set: {
              rooms: rooms,
            },
          }
        );
      } else {
        const rooms = result[0]?.rooms.map((item, i) => {
          if (item?._id == req.body.roomId) {
            item.roomQuantity = +item.roomQuantity + 1;
          }
          return item;
        });
        await hotelDetails.findByIdAndUpdate(
          { _id: result[0]._id },
          {
            $set: {
              rooms: rooms,
            },
          }
        );
      }
      res.send(true);
    } else {
      const hotel = await hotelDetails.find({ ownerId: req.user._id });

      if (req.body.decrease) {
        const rooms = hotel[0]?.rooms.map((item, i) => {
          if (item?._id == req.body.roomId) {
            item.roomQuantity = +item.roomQuantity - 1;
          }
          return item;
        });
        await hotelDetails.findByIdAndUpdate(
          { _id: hotel[0]._id },
          {
            $set: {
              rooms: rooms,
            },
          }
        );
      } else {
        const rooms = hotel[0]?.rooms.map((item, i) => {
          if (item?._id == req.body.roomId) {
            item.roomQuantity = +item.roomQuantity + 1;
          }
          return item;
        });
        await hotelDetails.findByIdAndUpdate(
          { _id: hotel[0]._id },
          {
            $set: {
              rooms: rooms,
            },
          }
        );
      }
      res.send(true);
    }
  } catch (error) {
    res.send(error);
  }
};
