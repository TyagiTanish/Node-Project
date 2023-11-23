const hotelSchema = require("../../../models/Hotel/hotelSchema");

const post = async (req, res) => {
  try {
    const role = "member";

    const result = await new hotelSchema({
      hotelName: req.body.hotelName,
      phone: req.body.phone,
      password: req.body.password,
      city: req.body.city,
      postalCode: req.body.postalCode,
      country: req.body.country,
      photo: req.files.path,
      lng: req.body.lng,
      lat: req.body.lat,
      role: role,
    });
    // console.log(req.files, req.body);
    // const data = await hotelSchema.findOne({ email: result.email });

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
