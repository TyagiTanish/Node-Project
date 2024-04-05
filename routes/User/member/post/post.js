const hotelDetails = require("../../../../models/Hotel/hotelSchema");
const userDetails = require("../../../../models/UserLogin/userSchema");

module.exports = async (req, res) => {
  try {
    const user = new userDetails({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      currency: "INR",
      role: "member",
    });
    user.save();
    const data = new hotelDetails({
      ownerId: user._id,
      hotelName: req.body.hotelName,
      location: { latitude: req.body.latitude, longitude: req.body.longitude },
      photo: req.files[0].path,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      pinCode: req.body.pinCode,
      rooms: [],
      amenities: JSON.parse(req.body.amenities),
      discription: req.body.discription,
      fulladdress: `${req.body.city},${req.body.state}, ${req.body.country}`,
    });
    data.save();
    res.json({ test: true });
  } catch (error) {
    res.send(error);
  }
};
