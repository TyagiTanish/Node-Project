const hotelSchema = require("../../../models/Hotel/hotelSchema");
const userSchema = require("../../../models/UserLogin/userSchema");
const post = async (req, res) => {
  try {
    const role = "member";
    const email = req.body.email;
    const data = await userSchema.findOne({ email: email });
    if (data) {
      const result = await new hotelSchema({
        ownerId: data._id,
        hotelName: req.body.hotelName,
        password: req.body.password,
        city: req.body.city,
        pinCode: req.body.postalCode,
        country: req.body.country,
        state: req.body.state,
        photo: req.files[0].path,
        location: { latitude: req.body.lat, longitude: req.body.lng },
        amenities: req.body.amenities,
        discription: req.body.discription,
        rooms: [],
      });
      result.save();
      const putData = await userSchema.findByIdAndUpdate(data._id, {
        role: role,
      });
      if (data.role === "customer") {
        putData();
      }
      res.send("Data Entered:)");
      console.log(req.files[0].path, result);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = post;
