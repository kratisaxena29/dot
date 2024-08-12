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
    category : {
        type: String,
        required: false   
    },
    ImageLink : {
        type: String,
        required: false   
    },
    tags : [
        {
            type: String,
            required: false   
        }
    ],
    twiterLink : {
        type: String,
        required: false   
    },
    linkedinLink : {
        type: String,
        required: false   
    },
    facebookLink : {
        type: String,
        required: false   
    },
    githubLink: {
        type: String,
        required: false   
    },
    unknownLink : {
        type: String,
        required: false   
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }
});

const CardSchema = mongoose.model('CardSchema', cardSchema);

module.exports = { CardSchema };
