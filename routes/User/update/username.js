const userSchema = require("../../../models/UserLogin/userSchema");

const username = async (req, res) => {
  const id = req.id;
  console.log(req.body);
  const name = req.body.name;
  const phone = req.body.phone;
  const data = await userSchema.findByIdAndUpdate(id, {
    name: name,
    phone: phone,
  });
  if (data) {
    res.send("username updated successfully");
  }
};
module.exports = username;
