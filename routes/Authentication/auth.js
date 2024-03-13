const userDetails = require("../../models/UserLogin/userSchema");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    if (req?.body?.loggedInUserId) {
      const loggedInUser = await userDetails.findOne({ _id: req?.body?.loggedInUserId })
      const user = await userDetails.findOne({ _id: req?.body?.userId })
      if (loggedInUser?.role === 'superAdmin') {
        const loginCred = new userDetails({
          email: user?.email,
          // password: user.password,
        });
        const token = await loginCred.genToken(req?.body?.userId);
        res.send({ token: token, data: user });
      }
    } else
      if (!req.body.password) {
        const result = await userDetails.findOne({ email: req.body.email });
        res.send(result);
      } else {
        const loginCred = new userDetails({
          email: req.body.email,
          password: req.body.password,
        });
        const result = await userDetails.findOne({ email: loginCred.email });
        const compare = await bcrypt.compare(loginCred.password, result.password);
        if (compare) {
          const token = await loginCred.genToken(result._id);
          res.send({ token: token, data: result });
        } else {
          res.send(false);
        }
      }

  } catch (error) {
    res.send(error)
  }
};
