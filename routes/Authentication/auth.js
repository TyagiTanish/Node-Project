const userDetails = require("../../models/UserLogin/userSchema");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    if (!req.body.password) {
      const result = await userDetails.findOne({ Email: req.body.Email });
      res.send(result);
    } else {
      const loginCred = new userDetails({
        Email: req.body.Email,
        Password: req.body.password,
      });
      const result = await userDetails.findOne({ Email: loginCred.Email });
      const compare = await bcrypt.compare(loginCred.Password, result.Password);
      if (compare) {
        const token = await loginCred.genToken(result._id);
        res.send({ token: token, data: result });
      } else {
        res.send(false);
      }
    }
  } catch (error) {
    console.log(Error);
  }
};
