const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30
  },
  article:{
    type: String,
    required: true,
    maxlength: 8
  },
  price:{
    type: Number,
    default: 0
  },
  category:{
    type: String,
    default: 'default'
  }
});

module.exports = mongoose.model("Product", Product);
