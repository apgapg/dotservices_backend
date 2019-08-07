const express = require('express');
const Client = require('../models/client');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  Client.find({})
      .populate('categories')
      .sort({
        updatedAt: -1
      })
      .limit(100)
      .exec(function (err, logs) {
        if (err) next(err);
        else {
          res.send(logs);
        }
      });
});

module.exports = router;
