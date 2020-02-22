const mongoose = require('mongoose');
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
    maxlength: 20
  },
  description:{
    type: String,
    maxlength: 50
  },
  image:{
    type: String,
    default: '/backend/assets/images/product-default.jpg'
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
    type: String,
    default: 'default'
  }
});

module.exports = mongoose.model("Product", Product);
