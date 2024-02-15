const mongoose = require('mongoose');

const Schema = mongoose.schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
