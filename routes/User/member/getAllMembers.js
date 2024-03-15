const userDetails = require("../../../models/UserLogin/userSchema");

/**
 *
 * @method GET
 * @api /getAllMembers
 * @description  - to give all the Members registered in userSchema
 */

module.exports = async (req, res) => {
  const data = await userDetails.find({ role: "member" , isDeleted: 'false'});
  res.send(data);
  //   console.log(data);
};
