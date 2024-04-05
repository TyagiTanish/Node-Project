const userDetails = require("../../models/UserLogin/userSchema")

module.exports = async (req, res) => {
  try {
    const result = await userDetails?.updateOne({
      _id: req?.user?._id
    }, {
      $set: {
        dashboard: req.body
      }
    })
    if (result) {
      res.send(true)
    } else {
      res.send(false)
    }
  } catch (error) {
    res.send(error)
  }

}