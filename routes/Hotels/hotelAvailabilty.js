const hotelSchema = require("../../models/Hotel/hotelSchema");
module.exports = async (req, res) => {
  try {
    // console.log(req.body);
    // const data = await hotelSchema.find({ _id: req.body.id });
    if (req.body.checked) {
      const data = await hotelSchema.findByIdAndUpdate(
        { _id: req.body.id },
        { $set: { availability: true } }
      );
      res.send(true);
    } else {
      const data = await hotelSchema.findByIdAndUpdate(
        { _id: req.body.id },
        { $set: { availability: false } }
      );
      res.send(false);
    }
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
