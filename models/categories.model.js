const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
});

module.exports = mongoose.model("Category", Category, 'Categories');
