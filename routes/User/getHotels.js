const hotelDetails = require("../../models/Hotel/hotelSchema");
module.exports = async (req, res) => {

  try {
    if (!req.id) {
      if (Object.keys(req.query).length === 0) {
        const data = await hotelDetails
          .find({ availability: true , isDeleted:'false'})
          .populate("ownerId");
        res.send(data);
      } else {
        const search = req.query.search;
        const price = req.query.price;
        const category = req.query.category;
        if (search === "" || search === undefined) {
          const data = await hotelDetails
            .find({ availability: true , isDeleted:'false'})
            .populate("ownerId");
          if(data.length){
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
              if (category) {
                const categoryHotels = hotels.filter((hotel) => {
                  const rooms = hotel?.rooms.map((room, index) => {
                    if (
                      room?.roomType === category[0]?.name ||
                      room?.roomType === category[1]?.name ||
                      room?.roomType === category[2]?.name
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
                res.send(categoryHotels);
              } else {
                res.send(hotels);
              }
            } else {
              if (category) {
                const categoryHotels = hotels.filter((hotel) => {
                  const rooms = hotel?.rooms.map((room, index) => {
                    if (
                      room?.roomType === category[0]?.name ||
                      room?.roomType === category[1]?.name ||
                      room?.roomType === category[2]?.name
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
                res.send(categoryHotels);
              } else {
                res.send(data);
              }
            }
    
          }
          else{
              res.send(false)
          }
        
        } else {
          if (typeof search == "string") {
         
            const data = await hotelDetails
            .find({
              $or: [
                { hotelName: { $regex: search, $options: "i" } },
                { city: { $regex: search, $options: "i" } },
                { state: { $regex: search, $options: "i" } },
                { fulladdress: { $regex: search, $options: "i" } },
              ],
              $and: [{ availability: true ,  isDeleted:'false' }],
            } )
            .populate("ownerId");
       
            const check = data?.filter(hotel=>{
              return hotel?.rooms?.length
            })
            
            if(check.length){
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
                if (category) {
                  
                  const categoryHotels = hotels.filter((hotel) => {
                    const rooms = hotel?.rooms.map((room, index) => {
                      if (
                        room?.roomType === category[0]?.name ||
                        room?.roomType === category[1]?.name ||
                        room?.roomType === category[2]?.name
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
                  res.send(categoryHotels);
                } else {
                  res.send(hotels);
                }
              } else {
                const data = await hotelDetails
                  .find({
                    $or: [
                      { hotelName: { $regex: search, $options: "i" } },
                      { city: { $regex: search, $options: "i" } },
                      { state: { $regex: search, $options: "i" } },
                      { fulladdress: { $regex: search, $options: "i" } },
                    ],
                    $and: [{ availability: true , isDeleted:'false' }],
                  })
                  .populate("ownerId");
                 if(data.length){
                  if (category) {
                    const categoryHotels = hotels.filter((hotel) => {
                      const rooms = hotel?.rooms.map((room, index) => {
                        if (
                          room?.roomType === category[0]?.name ||
                          room?.roomType === category[1]?.name ||
                          room?.roomType === category[2]?.name
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
                    res.send(categoryHotels);
                  } else {
                    res.send(data);
                  }
                 }else{
                    res.send(false)
                 }
              
              }
            }
        else{
          res.send(false)
        }
         
           
        
          
          } else if (typeof search === "object") {
            const latitude = Math.floor(search.latitude);
            const longitude = Math.floor(search.longitude);
            const data = await hotelDetails
              .find({
                "location.latitude": { $regex: latitude, $options: "i" },
                "location.longitude": { $regex: longitude, $options: "i" },
                $and: [{ availability: true , isDeleted:'false' }],
              })
              .populate("ownerId");

            const check = data?.filter(hotel=>{
              return hotel?.rooms?.length
            })
            if(check.length){
                     // if(data.length){
                      if (price) {
           
                        // res.send(data);
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
                        if (category) {
                          const categoryHotels = hotels.filter((hotel) => {
                            const rooms = hotel?.rooms.map((room, index) => {
                              if (
                                room?.roomType === category[0]?.name ||
                                room?.roomType === category[1]?.name ||
                                room?.roomType === category[2]?.name
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
                          res.send(categoryHotels);
                        } else {
                          res.send(hotels);
                        }
                      } else {
                        const latitude = Math.floor(search.latitude);
                        const longitude = Math.floor(search.longitude);
                        const data = await hotelDetails
                          .find({
                            "location.latitude": { $regex: latitude, $options: "i" },
                            "location.longitude": { $regex: longitude, $options: "i" },
                          })
                          .populate("ownerId");
                        if (category) {
                          const categoryHotels = hotels.filter((hotel) => {
                            const rooms = hotel?.rooms.map((room, index) => {
                              if (
                                room?.roomType === category[0]?.name ||
                                room?.roomType === category[1]?.name ||
                                room?.roomType === category[2]?.name
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
                          res.send(categoryHotels);
                        } else {
                          res.send(data);
                        }
                      }
                  
                    // }
                //  else{
                  // res.send(false)
                //  }
             
            }
            else{
                res.send(false)
            }
       
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
};
