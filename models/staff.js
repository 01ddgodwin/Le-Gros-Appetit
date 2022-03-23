const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    employee: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Staff', staffSchema);