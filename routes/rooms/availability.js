const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req,res) =>{
    try {
        if(!req.id)
        {
            const hotel = await hotelDetails.findOne({ownerId:req.user._id});
            const rooms = hotel?.rooms?.map((room)=>{
                if(String(room._id)===String(req.body.roomId)){
                    room.isAvailable = req.body.isAvailable
                }
                return room
            })
            await hotelDetails.findByIdAndUpdate({_id:hotel._id},{
                $set:{
                    rooms:rooms
                }
            })
            res.send(true)
        }else{
            const hotel = await hotelDetails.findOne({_id:req.id});
            const rooms = hotel?.rooms?.map((room)=>{
                if(String(room._id) === String(req.body.roomId)){
                    room.isAvailable = req.body.isAvailable
                }
                return room
            })

            await hotelDetails.findByIdAndUpdate({_id:hotel._id},{
                $set:{
                    rooms:rooms
                }
            })
            res.send(true)
        }
    } catch (error) {
        res.send(error)
    }
  
}