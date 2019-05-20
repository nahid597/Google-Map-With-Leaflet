/*Database schema for workers table*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    Name:{
        type: String,
        required: true
    },

    Phone:{
        type: String,
        required: true,
        unique: true,
        digit: true
    },

    Password:String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);