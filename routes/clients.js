const express = require('express');
const Client = require('../models/client');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	Client.Stylist.find({
		$or: [{visibility: {$exists: false}},{visibility: true}],
	})
		.populate('categories')
		.populate('areas')
		.sort({
			updatedAt: -1
		})
		.limit(100)
		.exec(function (err, logs) {
			if (err) next(err);
			else {
				res.send(logs.reverse());
			}
		});
});

module.exports = router;
