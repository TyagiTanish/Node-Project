const hotelSchema = require("../../models/Hotel/hotelSchema");
const userSchema = require("../../models/UserLogin/userSchema");
const post = async (req, res, next) => {
  const roomHighlight = [];
  try {
    if (!req.id) {
      const hotel = await hotelSchema.findOne({ownerId:req.user._id});
      await hotelSchema.updateOne(
        { _id: hotel._id },
        {
          $push: {
            rooms: [
              {
                roomQuantity: req.body.roomQuantity,
                roomType: req.body.type,
                photos: req.files,
                price: req.body.price,
                discription: req.body.discription,
                amenities: JSON.parse(req.body.roomHighlight),
              },
            ],
          },
        }
      );
      res.send(true)
    } else {
      await hotelSchema.findByIdAndUpdate(
        { _id: req.id },
        {
          $push: {
            rooms: [
              {
                roomQuantity: req.body.roomQuantity,
                roomType: req.body.type,
                photos: req.files,
                price: req.body.price,
                discription: req.body.discription,
                amenities: JSON.parse(req.body.roomHighlight),
              },
            ],
          },
        }
      );
      res.send(true)
    }
    
  } catch (err) {
    res.send(err);
  }
};

module.exports = post;
