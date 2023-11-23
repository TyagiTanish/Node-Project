const hotelDetails = require("../../../../models/Hotel/hotelSchema")

module.exports = async (req,res) => {
    const data = new hotelDetails({
        hotelName:req.body.name,
        location: {latitude:req.body.latitude,longitude:req.body.longitude},
        photo:req.files.path,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        pinCode:req.body.pinCode,
        rooms:[],
    })

    res.json({test: true})
}