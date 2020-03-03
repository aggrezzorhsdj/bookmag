const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const Product = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 30
  },
  article:{
    type: String,
    required: true,
    maxlength: 20,
    unique: true
  },
  description:{
    type: String,
    maxlength: 50
  },
  image:{
    type: String,
    default: 'product-default.jpg'
  },
  price:{
    type: Number,
    default: 0
  },
  old_price:{
    type: Number,
    default: 0
  },
  category:{
    type: String
  }
});

Product.plugin(uniqueValidator, {
  message: 'Error, expected {PATH} to be unique.'
});

module.exports = mongoose.model("Product", Product);
