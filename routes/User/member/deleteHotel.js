const hotelDetails = require("../../../models/Hotel/hotelSchema");
const userSchema = require("../../../models/UserLogin/userSchema");
const fs = require("fs");
module.exports = async (req, res) => {
  await hotelDetails.findByIdAndDelete({ _id: req.id });
  fs.unlink(req.query.data.photo, (err) => {
    if (err) console.log(err);
    else {
      console.log(`${req.query.data.photo} Deleted successfully`);
    }
  });
  if (req.query.data.rooms !== undefined) {
    req.query.data.rooms?.map((room) => {
      room.photos.map((photo) => {
        fs.unlink(photo.path, (err) => {
          if (err) console.log(err);
          else {
            console.log(`${photo.path} Deleted successfully`);
          }
        });
        //   console.log("jsdnkjsdkjchskjcnhsdkj");
      });
    });
  }

  const data = await hotelDetails.find({ ownerId: req.user._id });

  if (data.length === 0) {
    await userSchema.findByIdAndUpdate(req.user._id, {
      $set: {
        role: "customer",
      },
    });
    res.send(false);
  } else {
    res.send(true);
  }
  console.log(req.query.data.photo);
};
