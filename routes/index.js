const express = require("express");
const router = express.Router();
const authentication = require("./Authentication");
const user = require("./User");

router.use("/auth", authentication);
router.use("/userLogin", user);
