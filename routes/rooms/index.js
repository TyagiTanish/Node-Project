const express = require("express");
const router = express.Router();
const post = require("./addRooms");
router.post("/", post);

module.exports = router;
