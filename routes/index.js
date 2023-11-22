const express = require("express");
const router = express.Router();
const authentication = require("./Authentication");
const user = require("./User");
const auth = require("../middlewares/auth");
const get = require("./User/get");

const username=require('./User/update/username')


const password=require('./User/update/password')
const extractParam = require("../middlewares/extractParams/extractParams");

router.use("/auth", authentication);
router.use("/register", user);
router.get('/getUserData',extractParam("authToken"),auth,get);
router.put('/username/:id',extractParam("id"), username);
router.put('/password/:id',extractParam("id"), password)
module.exports = router;
