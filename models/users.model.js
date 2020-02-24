const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  login: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  password:{
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30,
  },
  email:{
    type: String,
    minlength: 8,
    maxlength: 30,
  }
});

module.exports = mongoose.model("User", User);
