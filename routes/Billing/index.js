const express = require("express");
const router = express.Router();
const post = require("./billingApi");
router.post("/", post);
module.exports = router;
