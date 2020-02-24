const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    products: [
        {
            title: String,
            price: Number,
            count: Number
        }
    ],
    summary: {
        type: Number
    }
});

module.exports = mongoose.model("Order", Order);