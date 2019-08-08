const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
	area: {
		type: String
	}
}, {timestamps: true});
const CategorySchema = new Schema({
		category: {
			type: String
		},
	},
	{timestamps: true});
const ClientSchema = new Schema({
		name: {
			type: String,
			required: true
		},
		number: {
			type: String,
			required: true
		},
		categories: [{type: Schema.Types.ObjectId, ref: 'category'}],
		areas: [{type: Schema.Types.ObjectId, ref: 'area'}]
	}, {timestamps: true}
);

const Area = mongoose.model('area', AreaSchema, 'areas');
const Category = mongoose.model('category', CategorySchema, 'category');
const Stylist = mongoose.model('client', ClientSchema, 'clients');

module.exports = {Stylist, Category, Area};
