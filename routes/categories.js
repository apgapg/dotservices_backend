const express = require('express');
const Client = require('../models/client');
const router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
	return res.send([]);

});

module.exports = router;
