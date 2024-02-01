const hotelDetails = require("../../models/Hotel/hotelSchema");

/**
 *
 * @method GET
 * @api /getHotelsForparticularMember/:id
 * @description  - to give all hotels of particular member
 */

module.exports = async (req, res) => {
  const data = await hotelDetails.find({ ownerId: req.id });
  // console.log(data);
  res.send(data);
};
