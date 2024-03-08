const hotelDetails = require("../../models/Hotel/hotelSchema");

const filterByPrice = (hotels, minPrice, maxPrice) => {
  return hotels.filter((hotel) => {
    const roomPrices = hotel.rooms.map((room) => Number(room.price));
    return roomPrices.some((price) => price >= minPrice && price <= maxPrice);
  });
};

const filterByCategory = (hotels, categories) => {
  return hotels.filter((hotel) => {
    const roomTypes = hotel.rooms.map((room) => room.roomType);
    return roomTypes.some((type) => categories.includes(type));
  });
};

const filterBySearch = (hotels, search) => {
  const regex = new RegExp(search, "i");
  return hotels.filter((hotel) => {
    return (
      regex.test(hotel.hotelName) ||
      regex.test(hotel.city) ||
      regex.test(hotel.state)
    );
  });
};

module.exports = async (req, res) => {
  try {
    if (!req.id) {
      let hotels;

      if (Object.keys(req.query).length === 0) {
        hotels = await hotelDetails
          .find({ availability: "true" })
          .populate("ownerId");
      } else {
        const { search, price, category } = req.query;

        if (!search || search === "") {
          hotels = await hotelDetails.find({}).populate("ownerId");
        } else {
          hotels = await hotelDetails
            .find({
              $or: [
                { hotelName: { $regex: search, $options: "i" } },
                { city: { $regex: search, $options: "i" } },
                { state: { $regex: search, $options: "i" } },
              ],
              availability: "true",
            })
            .populate("ownerId");
        }

        if (price) {
          hotels = filterByPrice(hotels, Number(price[0]), Number(price[1]));
        }

        if (category) {
          hotels = filterByCategory(
            hotels,
            category.map((c) => c.name)
          );
        }
      }

      res.send(hotels);
    } else {
      const { search } = req.query;

      if (!search || search === "") {
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
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// const hotelDetails = require("../../models/Hotel/hotelSchema");
// module.exports = async (req, res) => {
//   try {
//     if (!req.id) {
//       if (Object.keys(req.query).length === 0) {
//         const data = await hotelDetails
//           .find({ availability: "true" })
//           .populate("ownerId");
//         res.send(data);
//       } else {
//         const search = req.query.search;
//         const price = req.query.price;

//         if (search === "" || search === undefined) {
//           const data = await hotelDetails.find({}).populate("ownerId");
//           const category = req.query.category;
//           if (search === "" || search === undefined) {
//             const data = await hotelDetails
//               .find({ availability: "true" })
//               .populate("ownerId");
//             if (price) {
//               const hotels = data.filter((hotel) => {
//                 const rooms = hotel?.rooms.map((room) => {
//                   if (
//                     Number(room.price) >= Number(price[0]) &&
//                     Number(room.price) <= Number(price[1])
//                   ) {
//                     return true;
//                   } else {
//                     return false;
//                   }
//                 });
//                 if (rooms.includes(true)) {
//                   return hotel;
//                 }
//               });
//               if (category) {
//                 const categoryHotels = hotels.filter((hotel) => {
//                   const rooms = hotel?.rooms.map((room, index) => {
//                     if (
//                       room?.roomType === category[0]?.name ||
//                       room?.roomType === category[1]?.name ||
//                       room?.roomType === category[2]?.name
//                     ) {
//                       return true;
//                     } else {
//                       return false;
//                     }
//                   });
//                   if (rooms.includes(true)) {
//                     return hotel;
//                   }
//                 });
//                 res.send(categoryHotels);
//               } else {
//                 res.send(hotels);
//               }
//             } else {
//               if (category) {
//                 const categoryHotels = data.filter((hotel) => {
//                   const rooms = hotel?.rooms.map((room) => {
//                     if (
//                       room.roomType === category[0]?.name ||
//                       room.roomType === category[1]?.name ||
//                       room.roomType === category[2]?.name
//                     ) {
//                       return true;
//                     } else {
//                       return false;
//                     }
//                   });
//                   if (rooms.includes(true)) {
//                     return hotel;
//                   }
//                 });
//                 res.send(categoryHotels);
//               } else {
//                 res.send(data);
//               }
//             }
//           } else {
//             if (typeof search == "string") {
//               if (price) {
//                 const data = await hotelDetails
//                   .find({
//                     $or: [
//                       { hotelName: { $regex: search, $options: "i" } },
//                       { city: { $regex: search, $options: "i" } },
//                       { state: { $regex: search, $options: "i" } },
//                     ],
//                     $and: { availability: "true" },
//                   })
//                   .populate("ownerId");
//                 if (price) {
//                   const hotels = data.filter((hotel) => {
//                     const rooms = hotel?.rooms.map((room) => {
//                       if (
//                         Number(room.price) >= Number(price[0]) &&
//                         Number(room.price) <= Number(price[1])
//                       ) {
//                         return true;
//                       } else {
//                         return false;
//                       }
//                     });
//                     if (rooms.includes(true)) {
//                       return hotel;
//                     }
//                   });
//                   if (category) {
//                     const categoryHotels = hotels.filter((hotel) => {
//                       const rooms = hotel?.rooms.map((room, index) => {
//                         if (
//                           room?.roomType === category[0]?.name ||
//                           room?.roomType === category[1]?.name ||
//                           room?.roomType === category[2]?.name
//                         ) {
//                           return true;
//                         } else {
//                           return false;
//                         }
//                       });
//                       if (rooms.includes(true)) {
//                         return hotel;
//                       }
//                     });
//                     res.send(categoryHotels);
//                   } else {
//                     res.send(hotels);
//                   }
//                   // res.send(hotels);
//                 } else {
//                   const data = await hotelDetails
//                     .find({
//                       $or: [
//                         { hotelName: { $regex: search, $options: "i" } },
//                         { city: { $regex: search, $options: "i" } },
//                         { state: { $regex: search, $options: "i" } },
//                       ],
//                     })
//                     .populate("ownerId");
//                   if (category) {
//                     const categoryHotels = hotels.filter((hotel) => {
//                       const rooms = hotel?.rooms.map((room, index) => {
//                         if (
//                           room?.roomType === category[0]?.name ||
//                           room?.roomType === category[1]?.name ||
//                           room?.roomType === category[2]?.name
//                         ) {
//                           return true;
//                         } else {
//                           return false;
//                         }
//                       });
//                       if (rooms.includes(true)) {
//                         return hotel;
//                       }
//                     });
//                     res.send(categoryHotels);
//                   } else {
//                     res.send(data);
//                   }
//                   // res.send(data);
//                 }
//               } else if (typeof search === "object") {
//                 const latitude = Math.floor(search.latitude);
//                 const longitude = Math.floor(search.longitude);
//                 const data = await hotelDetails
//                   .find({
//                     "location.latitude": { $regex: latitude, $options: "i" },
//                     "location.longitude": { $regex: longitude, $options: "i" },
//                   })
//                   .populate("ownerId");
//                 // res.send(data);
//                 if (price) {
//                   const hotels = data.filter((hotel) => {
//                     const rooms = hotel?.rooms.map((room) => {
//                       if (
//                         Number(room.price) >= Number(price[0]) &&
//                         Number(room.price) <= Number(price[1])
//                       ) {
//                         return true;
//                       } else {
//                         return false;
//                       }
//                     });
//                     if (rooms.includes(true)) {
//                       return hotel;
//                     }
//                   });
//                   res.send(hotels);
//                 } else {
//                   const data = await hotelDetails
//                     .find({
//                       $or: [
//                         { hotelName: { $regex: search, $options: "i" } },
//                         { city: { $regex: search, $options: "i" } },
//                         { state: { $regex: search, $options: "i" } },
//                       ],
//                     })
//                     .populate("ownerId");
//                   res.send(data);
//                 }
//               } else if (typeof search === "object") {
//                 if (price) {
//                   const latitude = Math.floor(search.latitude);
//                   const longitude = Math.floor(search.longitude);
//                   const data = await hotelDetails
//                     .find({
//                       "location.latitude": { $regex: latitude, $options: "i" },
//                       "location.longitude": { $regex: longitude, $options: "i"},
//                     })
//                     .populate("ownerId");
//                   // res.send(data);
//                   const hotels = data.filter((hotel) => {
//                     const rooms = hotel?.rooms.map((room) => {
//                       if (
//                         Number(room.price) >= Number(price[0]) &&
//                         Number(room.price) <= Number(price[1])
//                       ) {
//                         return true;
//                       } else {
//                         return false;
//                       }
//                     });
//                     if (rooms.includes(true)) {
//                       return hotel;
//                     }
//                   });
//                   res.send(hotels);
//                 } else {
//                   const latitude = Math.floor(search.latitude);
//                   const longitude = Math.floor(search.longitude);
//                   const data = await hotelDetails
//                     .find({
//                       "location.latitude": { $regex: latitude, $options: "i" },
//                       "location.longitude": {
//                         $regex: longitude,
//                         $options: "i",
//                       },
//                     })
//                     .populate("ownerId");
//                   res.send(data);
//                 }
//                 if (rooms.includes(true)) {
//                   return hotel;
//                 }
//               }
//               res.send(hotels);
//             } else {
//               res.send(data);
//             }
//           }
//         } else {
//           if (Object.keys(req.query).length === 0) {
//             const data = await hotelDetails.find({ _id: req.id });
//             res.send(data);
//           } else {
//             const search = req.query.search;
//             if (search === "") {
//               const data = await hotelDetails.find({ _id: req.id });
//               res.send(data);
//             } else {
//               const data = await hotelDetails.find({
//                 _id: req.id,
//                 $or: [{ hotelName: { $regex: search, $options: "i" } }],
//               });
//               res.send(data);
//             }
//           }
//         }
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };
