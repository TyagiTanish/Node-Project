const userSchema = require("../../../models/UserLogin/userSchema");

const bcrypt = require("bcrypt");

const password = async (req, res) => {

try {
  const id = req.id;
  const password = await bcrypt.hash(req.body.newpassword, 10);
  const data = await userSchema.findById({ _id: id });
  const result = await bcrypt.compare(req.body.password, data.password);
  if (!result) {
    res.send(false);
  } else {
    await userSchema.findByIdAndUpdate(id, {
      password: password,
    });
    res.send(true);
   
  }
} catch (error) {
  res.send(error)
}
 
};
module.exports = password;
