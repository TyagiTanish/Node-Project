const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdetails",
    },
    hotelName: {
      type: String,
    },

    location: {
      latitude: {
        type: String,
      },
      longitude: {
        type: String,
      },
    },
    photo: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    pinCode: {
      type: String,
    },
    rooms: [
      {
        roomQuantity: {
          type: String,
          required: true,
        },
        roomType: {
          type: String,
          required: true,
        },
        photos: [],
        price: {
          type: Object,
          required: false,
        },
        amenities: [],
        discription: {
          type: String,
          required: true,
        },
        isAvailable: {
          type: String,
          default: true,
        },
      },
    ],
    amenities: [],
    discription: {
      type: String,
    },
    categories: {
      type: Array,
      default: ["Suite", "Deluxe", "Super Deluxe"],
    },
    isDeleted: {
      type: String,
      default: false,
    },
    availability: {
      type: String,
      default: true,
    },
  },

  { timestamps: true }
);

const hotelDetails = mongoose.model("hoteldetails", hotelSchema);
module.exports = hotelDetails;
