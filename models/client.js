const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category: {
        type: String
    }
});
const ClientSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
    }
);

const Category = mongoose.model('category', CategorySchema,'category');
const Stylist = mongoose.model('clients', ClientSchema,'clients');

module.exports = Stylist;
