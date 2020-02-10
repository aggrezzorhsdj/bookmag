const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  name: {
    type: String,
    required: true,
    default: 'New Product',
  },
  article: {
    type: String
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
    default: 'default'
  }
}, {
  collection: 'products'
})

module.exports = mongoose.model('Product', Product);
