const userSchema = require("../../models/UserLogin/userSchema");
const post = async (req, res) => {
  try {
    const result = await new userSchema({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
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
    console.log(err);
  }
};
module.exports = post;
