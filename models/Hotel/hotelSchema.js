const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true,
    },
    
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    rooms:[{
        roomNo:{
            type:String,
            required:true
        },
        roomType:{
            type:Object,
            required:true
        },
        photo1:{
            type:String,
            required:true
        },
        photo2:{
            type:String,
            required:true
        },
        photo3:{
            type:String,
            required:true
        },
        price:{
            type:Object,
            required:false
        }

    }]
  },
  { timestamps: true }
);


const hotelDetails = mongoose.model("hotelDetails", hotelSchema);
module.exports = hotelDetails;