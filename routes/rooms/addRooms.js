const hotelSchema = require("../../models/Hotel/hotelSchema");
const userSchema = require("../../models/UserLogin/userSchema");
const post = async (req, res, next) => {
  const roomHighlight = [];
  // req.body.files.map((file)=>console.log(file))

  // [...photos,{path:file.path}]
  // console.log(req.file)

  try {
    if (!req.id) {
      const hotel = await hotelSchema.findOne();
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
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = post;
