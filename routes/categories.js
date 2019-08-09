const express = require('express');
const Client = require('../models/client');
const router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
	Client.Category.find()
		.sort({
			updatedAt: -1
		})
		.exec(function (err, logs) {
			if (err) next(err);
			else {
				res.send(logs);
			}
		});
});

module.exports = router;
