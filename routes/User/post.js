const userSchema = require("../../models/UserLogin/userSchema");
const post = async (req, res) => {
  try {
    const role='customer'
    const result = await new userSchema({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      role:role,
    })

      const data= await userSchema.findOne({email:result.email});

      if(data)
      {
        res.send(false);
      }
      else{
        await result.save();
        res.send(true);
      }
  } catch (err) {
<<<<<<< HEAD
    res.send(err)
=======

>>>>>>> 3301d1356c7076de9d89e8ef794a11f3687b177e
  }
};
module.exports = post;
