const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }
});

const CardSchema = mongoose.model('CardSchema', cardSchema);

module.exports = { CardSchema };
