const mongoose = require('mongoose');

const myUser = new mongoose.Schema({
    // user_id: { type: Number, required: true },
    username: { type: String, required: true }, 
    password: { type: String, required: true }, 
    email: { type: String, required: false }, 
    role: { type: Number, required: false },  
});

module.exports = mongoose.model('user',myUser,'user');