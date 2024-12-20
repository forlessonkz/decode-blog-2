const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    email: String,
    full_name: String,
    password: String,
    isAdmin: Boolean,
});

module.exports = mongoose.model('user', UserSchema);