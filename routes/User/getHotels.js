const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req, res) => {
  try {
    const data = await hotelDetails.find({});

    res.send(data);
  } catch (error) {
    res.send(error)
  }

  // console.log(dataa);
};
