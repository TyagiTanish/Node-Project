const express = require("express");
const router = express.Router();
const authentication = require("./Authentication");
const user = require("./User");
const auth = require("../middlewares/auth");
const get = require("./User/get");
const getMember = require("./User/member/post/getUser");
const username = require("./User/update/username");
const registerMember = require("./User/member/post/post");
const getHotelForParticularUser = require("./User/member/get/get");
const getHotelForCustomer = require("./User/getHotels");
const password = require("./User/update/password");
const extractParam = require("../middlewares/extractParams/extractParams");
const getInfo = require("./User/getInfo");
const searchHotels = require("./User/searchHotels");
const deleteHotel = require("./User/member/deleteHotel");
const update = require("./User/member/update");
const rooms = require("./rooms");
const bookRoom = require("./Billing");
const bookingDetails = require("./User/member/bookingDetails");
const bookingDelete = require("./User/member/bookingDelete");
const getDetails = require("./User/member/getDetails");
const bookingAccept = require("./User/member/bookingAccept");
const booking = require("./payment/booking");
const availability = require("./rooms/availability");
const paymentSuccess = require("./payment/paymentSuccess");
const acceptedBookings = require("./User/member/acceptedBookings");
const getBooking = require("./Billing/getBooking");
const setRoomQuantity = require("./rooms/setRoomQuantity");
const getAllMembers = require("./User/member/getAllMembers");
const hotelAvalability = require("./Hotels/hotelAvailabilty");
const getHotelForParticularMember = require("./Hotels/getHotelsForParticularMember");

const getAllUsers = require("./User/member/getAllUsers");
const updateAmeneties = require("./User/member/updateAmeneties");
const updateArrival = require("./User/member/updateArrival");
const updatePaymentStatus = require("./User/member/updatePaymentStatus");
const GetReciept = require("./Reciept/GetReciept");
const getData = require("./User/member/getData");
const GetReminders = require("./User/member/GetReminders");
const memberDelete = require("./User/member/memberDelete");
const updateMember = require("./User/member/updateMember");
const allBookings = require("./User/member/AllBookings");
const particularBooking = require("./User/member/ParticularHotelBooking");

router.use("/auth", authentication);
router.use("/register", user);
router.get("/getUserData", extractParam("authToken"), auth, get);
router.get("/allBookings", auth, allBookings);
router.get(
  "/particularHotelBookings/:id",
  extractParam("id"),
  auth,
  particularBooking
);
router.put("/username/:id", extractParam("id"), username);
router.put("/password/:id", extractParam("id"), password);
router.get("/getInfo/:id", extractParam("id"), auth, getInfo);
router.get("/getHotel/:id", extractParam("id"), getHotelForCustomer);
router.get("/hotels", auth, getHotelForParticularUser);
router.get("/getHotels", getHotelForCustomer);
router.get("/searchHotels", auth, searchHotels);
router.post("/getMember", getMember);
router.delete("/deleteHotel/:id", extractParam("id"), auth, deleteHotel);
router.put("/updateUser", update);
router.use("/deleteRoom", auth, rooms);
router.use("/deleteRoom/:id", extractParam("id"), rooms);
router.get("/bookingDetails", auth, bookingDetails);
router.post("/order", booking);
router.put("/availability/:id", extractParam("id"), availability);
router.put("/availability", auth, availability);
router.get("/bookingDetails", auth, bookingDetails);
router.delete("/bookingDelete/:id", extractParam("id"), auth, bookingDelete);
router.use("/bookRoom", auth, bookRoom);
router.post("/paymentSuccess", auth, paymentSuccess);
router.get("/getDetails/:id", extractParam("id"), getDetails);
router.use("/bookRoom", auth, bookRoom);
router.use("/getBookings", auth, getBooking);
router.use("/getBookingDetails/:id", extractParam("id"), getBooking);
router.post("/paymentSuccess", paymentSuccess);
router.get("/getDetails/:id", extractParam("id"), getDetails);
router.get("/getAllMembers", auth, getAllMembers);
router.get("/getAllUsers", auth, getAllUsers);
router.put("/bookingAccept/:id", extractParam("id"), auth, bookingAccept);
router.get("/acceptedBookings", auth, acceptedBookings);
router.put("/setRoomQuantity/:id", extractParam("id"), setRoomQuantity);
router.put("/setRoomQuantity", auth, setRoomQuantity);
router.post("/updateAmeneties/:id", extractParam("id"), updateAmeneties);
router.get(
  "/getHotelForParticularMember/:id",
  extractParam("id"),
  getHotelForParticularMember
);
router.put("/memberDelete/:id", extractParam("id"), memberDelete);

router.put("/memberUpdate/:id", extractParam("id"), updateMember);

router.put("/memberUpdate/:id", extractParam("id"), updateMember);
router.put("/setHotelAvailability", auth, hotelAvalability);
router.get("/getData", auth, getData);
router.put("/updateArrival/:id", extractParam("id"), updateArrival);
router.put("/updatePaymentStatus/:id", extractParam("id"), updatePaymentStatus);
router.get("/viewReciept", GetReciept);
router.get("/getReminders", GetReminders);

module.exports = router;
