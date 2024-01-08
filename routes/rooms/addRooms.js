const hotelSchema = require("../../models/Hotel/hotelSchema");
const post = async (req, res) => {
  try {
    // const role = "member";
    const email = req.body.email;
    const data = await userSchema.findOne({ email: email });
    if (data) {
      // console.log(req.body.files[0]);
      const result = await new hotelSchema({
        rooms: [
          { roomNo: req.body.roomNo },
          { roomType: req.body.type },
          { photo1: req.body.files[0].path },
          { photo2: req.body.files[1].path },
          { photo3: req.body.files[2].path },
          { price: req.body.price },
          { roomHighlights: req.body.roomHighlight },
        ],
      });
      result.save();
      // console.log(req.body);
      //   const putData = await userSchema.findByIdAndUpdate(data._id, {
      //     role: role,
      // });
      res.send("Data Entered:)");
      // console.log(req.body.files[0].path);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = post;
