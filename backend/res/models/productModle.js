/**
 * product databse schema
 */

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    productInfo: {
        title: String,
        price: Number,
        discountPercentage: { type: Number, default: 0 },
        description: String
    },
    images: [String],
    productType: String
});

module.exports = mongoose.model('Product', productSchema);
