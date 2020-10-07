const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Creates a new DB using the following schema
const schema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', schema);