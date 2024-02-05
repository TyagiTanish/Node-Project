const hotelDetails = require("../../models/Hotel/hotelSchema");

/**
 *
 * @method GET
 * @api /getHotelsForparticularMember/:id
 * @description  - to give all hotels of particular member
 */

module.exports = async (req, res) => {
  try{
    if (Object.keys(req.query).length === 0) {
      const data = await hotelDetails.find({ ownerId: req?.id });
  
      res.send(data);
    } else {
      const limit = req?.query?.limit;
      const page = req?.query?.page;
      const sortby = req.query.sortby === "asc" ? 1 : -1;
      const orderby = req.query.orderby;
      const data = await hotelDetails
        .find({ ownerId: req?.id })
        .limit(limit)
        .skip(limit * page)
        .sort({ [orderby]: sortby });
  
      res.send(data);
  }
 
  }
  catch(err){
    console.log(err)
    res.send(err)
  }
};
