const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Creates a new DB using the following schema
const schema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    jwt: { type: String, required: true },
    cart: { type: Array, default: [] },
    role: { type: String, default: 'user' },
    purchases: { type: Array, default: [] }
});

module.exports = mongoose.model('User', schema);