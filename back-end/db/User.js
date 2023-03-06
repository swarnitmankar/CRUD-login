const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    address:String,
    telephoneno:Number,
    adhar:Number,
    username: String,
    password: String
});

module.exports = mongoose.model("users", userSchema);