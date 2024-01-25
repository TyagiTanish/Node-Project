const hotelDetails = require("../../../models/Hotel/hotelSchema");
const userSchema = require("../../../models/UserLogin/userSchema");
const fs = require("fs");
module.exports = async (req, res) => {
  const data = await hotelDetails.find({ _id: req.id });
  console.log(data[0].photo);
  fs.unlink(data[0].photo, (err) => {
    if (err) console.log(err);
    else {
      console.log(`${data[0].photo} Deleted successfully`);
    }
  });
  if (data[0].rooms !== undefined) {
    data[0].rooms?.map((room) => {
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
  await hotelDetails.findByIdAndDelete({ _id: req.id });

  const dataa = await hotelDetails.find({ ownerId: req.user._id });

  if (dataa.length === 0) {
    await userSchema.findByIdAndUpdate(req.user._id, {
      $set: {
        role: "customer",
      },
    });
    res.send(false);
  } else {
    res.send(true);
  }
  // console.log(req.id);
  // console.log(req.body);
};
