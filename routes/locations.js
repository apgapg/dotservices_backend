const express = require('express');
const router = express.Router();
const Location = require('../models/location');

router.post('/', function (request, response, next) {
    console.log(request.body);
    /*const location = new Location({
        androidId: request.body.androidId,
        latitude: request.body.latitude,

        longitude: request.body.longitude,
        time: request.body.time,
        capturedAddress: request.body.capturedAddress
    });*/
    const query = {androidId: request.body.androidId};

    Location.findOneAndUpdate(query, request.body, {upsert: true}, function (err, book) {
        if (err) return next(err);
        return response.send("Saved successfully");
    });
});
module.exports = router;
