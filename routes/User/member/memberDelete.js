const hotelDetails = require("../../../models/Hotel/hotelSchema");
const userDetails = require("../../../models/UserLogin/userSchema");

module.exports = async (req, res) => {
  try {
   
    const data = await userDetails.findByIdAndUpdate(req.id, {
      isDeleted: true,
    });
    const result = await hotelDetails.updateMany(
      { ownerId: req.id },
      {
        isDeleted: true,
      }
    );
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
