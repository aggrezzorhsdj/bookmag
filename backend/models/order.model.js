const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const Product = require('./products.model');
const ProductSchema = mongoose.model('Product').schema;

const Order = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    products: [{
        product: ProductSchema,
        count: Number
    }],
});

module.exports = mongoose.model("Order", Order);