const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
        androidId: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
        time: {
            type: Number,
        },
        capturedAddress: {
            type: String,
        }
    },{timestamps: true}
);

const Location = mongoose.model('location', LocationSchema, 'locations');
module.exports = Location;
