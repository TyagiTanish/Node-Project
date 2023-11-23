const express = require("express");
const router = express.Router();
const post = require("./addHotel");
router.post("/", post);

module.exports = router;
