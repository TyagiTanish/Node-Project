const express = require("express");
const router = express.Router();
const post = require("./bookingApi");
const get = require("./getBooking");
router.post("/", post);
router.get("/", get);

module.exports = router;
