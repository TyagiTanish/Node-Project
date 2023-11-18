const express = require('express');
const router = express.Router();
const authenticateUser = require('./auth');



router.post('/',authenticateUser);
module.exports = router