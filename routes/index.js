const express = require('express');
const router = express.Router();
const authentication = require('./Authentication')


router.use('/auth',authentication);

module.exports = router