const userSchema = require("../../models/UserLogin/userSchema");
const bcrypt = require("bcrypt");
const post = async (req, res) => {
  try {
    const result = await new userSchema({
      Name: req.body.Name,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Password: req.body.Password,
    }).save();
    // console.log(req.body);
    res.send(result._id);
  } catch (err) {
    console.log(err);
  }
};
module.exports = post;
