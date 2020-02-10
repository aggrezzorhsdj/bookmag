const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', User);
