const express = require('express');
const Adv = require('../models/adv');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    Adv.find()
        .populate({
            path: 'client',
            populate: {
                path: 'areas categories'
            }
        })
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
