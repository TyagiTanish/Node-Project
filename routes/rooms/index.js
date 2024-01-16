const express = require("express");
const router = express.Router();
const post = require("./addRooms");
const deleteRoom = require('./deleteRoom')

router.post("/", post);
router.delete('/',deleteRoom);
module.exports = router;
