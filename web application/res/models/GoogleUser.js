const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Creates a new DB using the following schema
const schema = new Schema({
    googleId: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    jwt: { type: String, required: true },
    cart: { type: Array, default: [] }
});

module.exports = mongoose.model('GoogleUser', schema);