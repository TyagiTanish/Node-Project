const express = require("express");
const router = express.Router();
const authentication = require("./Authentication");
const user = require("./User");
const auth = require("../middlewares/auth");
const get = require("./User/get");
const extractParam = require("../middlewares/extractParams/extractParams");

router.use("/auth", authentication);
router.use("/register", user);
router.get('/getUserData',extractParam("authToken"),auth,get);

module.exports = router;
