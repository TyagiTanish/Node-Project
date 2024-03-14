const userDetails = require("../../../models/UserLogin/userSchema");

module.exports = async (req, res) => {
  try {
    const data = await userDetails.findByIdAndUpdate(req.id, {
      name: req.body.firstName,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
    });

    res.send(true);
  } catch (err) {
    console.log(err);
    res.send(false);
  }
};
