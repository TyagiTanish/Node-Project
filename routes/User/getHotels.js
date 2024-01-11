const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req, res) => {
  const data = await hotelDetails.find({});

  res.send(data);
  // console.log(dataa);
};
