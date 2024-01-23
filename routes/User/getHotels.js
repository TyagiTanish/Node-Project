const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req, res) => {
  try {
    if (!req.id) {
      const data = await hotelDetails.find({}).populate('ownerId');
      res.send(data);
    } else {
      const data = await hotelDetails.find({ _id: req.id });
      res.send(data);
    }
  } catch (error) {
    console.log(error)
    res.send(error);
  }

  // console.log(dataa);
};
