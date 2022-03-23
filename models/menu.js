const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Menu', menuSchema);