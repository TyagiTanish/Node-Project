

const express = require("express");
const router = express.Router();         
const authentication = require("./Authentication");
const user = require("./User");
const auth = require("../middlewares/auth");
const get = require("./User/get");
const path = require("path");
const username=require('./User/update/username')
const multer = require("multer");
const ProfileUpload=require('./Hotels/ProfileUpload')
const password=require('./User/update/password')
const extractParam = require("../middlewares/extractParams/extractParams");
const storage = multer.diskStorage({
    destination: function (req, File, cb) {
      // console.log(__dirname);
      let fileLocation = path.join("./Images");
      // console.log(fileLocation);
      cb(null, fileLocation);
    },
    filename: function (req, File, cb) {
      let fileName = Date.now() + File.originalname;
      cb(null, fileName);
    },
  });
  const upload = multer({
    storage: storage,
  }).array('files',3);
router.use("/auth", authentication);
router.use("/register", user);
router.get('/getUserData',extractParam("authToken"),auth,get);
router.put('/username/:id',extractParam("id"), username);
router.put('/password/:id',extractParam("id"), password)
router.post("/upload", upload, ProfileUpload);
module.exports = router;
