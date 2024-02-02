const hotelDetails = require("../../models/Hotel/hotelSchema");
module.exports = async (req, res) => {
    try{
        const data = await hotelDetails.find({ _id: req.id });

        res.send(data);
    }catch(err){
        res.send(err);
    }

    };
