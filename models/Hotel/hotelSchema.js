const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema(
  {
    ownerId: {
      type: String,
      required: true,
    },
    hotelName: {
      type: String,
      required: true,
    },

    location: {
      latitude: {
        type: String,
        required: true,
      },
      longitude: {
        type: String,
        required: true,
      },
    },
    photo: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    rooms: [
      {
        roomNo: {
          type: String,
          required: true,
        },
        roomType: {
          type: Object,
          required: true,
        },
        photo1: {
          type: String,
          required: true,
        },
        photo2: {
          type: String,
          required: true,
        },
        photo3: {
          type: String,
          required: true,
        },
        price: {
          type: Object,
          required: false,
        },
        roomHighlights: {
          type: Object,
          required: true,
        },
      },
    ],
    amenities: [],
  },
  { timestamps: true }
);

const hotelDetails = mongoose.model("hotelDetails", hotelSchema);
module.exports = hotelDetails;
