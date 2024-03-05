const hotelDetails = require("../../models/Hotel/hotelSchema");
module.exports = async (req, res) => {
  try {
    if (!req.id) {
      if (Object.keys(req.query).length === 0) {
        const data = await hotelDetails.find({}).populate("ownerId");
        res.send(data);
      } else {
        const search = req.query.search;
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
          if (typeof search == "string") {

            if (price) {

              const data = await hotelDetails
                .find({
                  $or: [
                    { hotelName: { $regex: search, $options: "i" } },
                    { city: { $regex: search, $options: "i" } },
                    { state: { $regex: search, $options: "i" } },
                  ],
                })
                .populate("ownerId");
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
              const data = await hotelDetails
                .find({
                  $or: [
                    { hotelName: { $regex: search, $options: "i" } },
                    { city: { $regex: search, $options: "i" } },
                    { state: { $regex: search, $options: "i" } },
                  ],
                })
                .populate("ownerId");
              res.send(data);

            }

          } else if (typeof search === "object") {


            if (price) {


              const latitude = Math.floor(search.latitude);
              const longitude = Math.floor(search.longitude);
              const data = await hotelDetails
                .find({
                  "location.latitude": { $regex: latitude, $options: "i" },
                  "location.longitude": { $regex: longitude, $options: "i" },
                })
                .populate("ownerId");
              res.send(data);
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
              const latitude = Math.floor(search.latitude);
              const longitude = Math.floor(search.longitude);
              const data = await hotelDetails
                .find({
                  "location.latitude": { $regex: latitude, $options: "i" },
                  "location.longitude": { $regex: longitude, $options: "i" },
                })
                .populate("ownerId");
              res.send(data);
            }


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
}