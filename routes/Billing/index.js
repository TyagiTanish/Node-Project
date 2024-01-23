const express = require("express");
const router = express.Router();
const post = require("./bookingApi");
router.post("/", post);
module.exports = router;
