const express = require('express');
const Client = require('../models/client');
const router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
	if (req.query.categoryId) {
		Client.Stylist.find({
			$or: [{visibility: {$exists: false}}, {visibility: true}],
			categories: {$all: [mongoose.Types.ObjectId(req.query.categoryId)]}
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
	} else
		Client.Stylist.find({
			$or: [{visibility: {$exists: false}}, {visibility: true}],
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
