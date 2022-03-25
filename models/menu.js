const { Double } = require('mongodb');
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Menu', menuSchema);