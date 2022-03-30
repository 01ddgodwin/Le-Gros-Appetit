const { Double } = require('mongodb');
const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    items: [],
    quantity: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', ordersSchema);