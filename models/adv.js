const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Client = require('../models/client');

const AdvSchema = new Schema({
        image: {
            type: String,
            required: true
        },
        clientId: {
            type: String,
            required: true
        },
        visibility: {
            type: Boolean,
            required: true
        },
        client: {type: Schema.Types.ObjectId, ref: 'client'},

    },
    {timestamps: true}
);

const Adv = mongoose.model('advs', AdvSchema, 'advertisements');
module.exports = Adv;
