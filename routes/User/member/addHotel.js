const hotelSchema = require("../../../models/Hotel/hotelSchema");
const userSchema = require("../../../models/UserLogin/userSchema");
const post = async (req, res) => {
  try {
    const role = "member";
    const email = req.body.email;
    const data = await userSchema.findOne({ email: email });
    const result = await new hotelSchema({
      ownerId: data._id,
      hotelName: req.body.hotelName,
      phone: req.body.phone,
      password: req.body.password,
      city: req.body.city,
      pinCode: req.body.postalCode,
      country: req.body.country,
      photo: req.files.path,
      location: { latitude: req.body.lat, longitude: req.body.lng },
    });
    // console.log(req.files, req.body);
    const putData = await userSchema.findByIdAndUpdate(data._id, {
      role: role,
    });
    console.log(result, putData);
    // if (data) {
    //   res.send(false);
    // } else {
    //   await result.save();
    //   res.send(true);
    // }
  } catch (err) {
    console.log(err);
  }
};
module.exports = post;
