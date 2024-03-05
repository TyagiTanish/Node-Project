const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req, res) => {
  try {
    if (!req.id) {
      if (Object.keys(req.query).length === 0) {
        const data = await hotelDetails.find({}).populate("ownerId");
        res.send(data);
      } else {
        const search = req.query.search;
        // const search = "tushar";
        const price = req.query.price;
        if (search === "") {
          const data = await hotelDetails.find({}).populate("ownerId");
          if (price) {
            const hotels = data.filter((hotel) => {
              const rooms = hotel?.rooms.map((room) => {
                if (
                  Number(room.price) >= Number(price[0]) &&
                  Number(room.price) <= Number(price[1])
                ) {
                  return true;
                } else {
                  return false;
                }
              });
              if (rooms.includes(true)) {
                return hotel;
              }
            });
            res.send(hotels);
          } else {
            res.send(data);
          }
        } else {
          const data = await hotelDetails
            .find({ $or: [{ hotelName: { $regex: search, $options: "i" } }] })
            .populate("ownerId");
          if (price) {
            const hotels = data.filter((hotel) => {
              const rooms = hotel?.rooms.map((room) => {
                if (
                  Number(room.price) >= Number(price[0]) &&
                  Number(room.price) <= Number(price[1])
                ) {
                  return true;
                } else {
                  return false;
                }
              });
              if (rooms.includes(true)) {
                return hotel;
              }
            });
            res.send(hotels);
          } else {
            res.send(data);
          }
        }
      }
    } else {
      if (Object.keys(req.query).length === 0) {
        const data = await hotelDetails.find({ _id: req.id });
        res.send(data);
      } else {
        const search = req.query.search;
        if (search === "") {
          const data = await hotelDetails.find({ _id: req.id });
          res.send(data);
        } else {
          const data = await hotelDetails.find({
            _id: req.id,
            $or: [{ hotelName: { $regex: search, $options: "i" } }],
          });
          res.send(data);
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }

  // console.log(dataa);
};
