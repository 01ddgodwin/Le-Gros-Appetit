const mongoose = require('mongoose');
const Scheme = mongoose.Scheme;

const menuScheme = new Schema({
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Menu', menuSchema);