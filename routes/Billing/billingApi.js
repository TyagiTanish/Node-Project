const billingSchema = require("../../models/Billing/billingSchema");
const hotelDetails=require("../../models/Hotel/hotelSchema")
const post = async (req, res) => {
  try {
    // const result = "";
    // if (!req.body.guestName) {
    //   result = await new billingSchema({
    //     fullName: req.body.fullName,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //   });
    // } else {
    //   result = await new billingSchema({
    //     fullName: req.body.fullName,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     guestName: req.body.guestName,
    //     guestEmail: req.body.guestEmail,
    //   });
    // }
    
    console.log(req.body.roomId)
        const data=await hotelDetails.findById({_id:req.body.hotelId});
        const result=data?.rooms.filter((item)=>{
            return item._id=req.body.roomId
        })
        console.log(result)
        console.log('hello')
    res.send("Data Entered Successfully:)");
  } catch (err) {
    res.send(err);
  }
};
module.exports = post;
