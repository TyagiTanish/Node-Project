const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req,res) =>{
    const images =JSON.parse(req.body.photos);
  const image  =  images.concat(req.files);
    if(!req.id){
        const hotel = await hotelDetails.findOne({ownerId:req.user._id})
       const rooms = hotel.rooms.map((room)=>{
            if(room._id == req.body.id)
            {
                     room.roomType= req.body.type,
                     room.amenities = JSON.parse(req.body.amenities),
                     room.price = req.body.price,
                     room.discription =req.body.description,
                     room.photos = image
            }
            return room;
    })
    await hotelDetails.updateOne({_id:hotel._id},{
        $set:{
            rooms:rooms
        }
    }) 
    res.send(true);
    }else{
        const hotel = await hotelDetails.findOne({_id:req.id})
        const rooms = hotel?.rooms?.map((room)=>{
             if(room._id == req.body.id)
             {
                      room.roomType= req.body.type,
                      room.amenities = JSON.parse(req.body.amenities),
                      room.price = req.body.price,
                      room.discription =req.body.description,
                      room.photos = image
             }
             return room;
     })
     await hotelDetails.updateOne({_id:hotel._id},{
         $set:{
             rooms:rooms
         }
     })
 
  
     res.send(true);
    }
  
}