/**
 * api routes
 */
const router = require('express').Router();
const ProductQueries = require('../../dbQueries/products');

router.get('/products', async (req, res) => {
    const products = await ProductQueries.getRandomProducts(10);
    res.json(products);
});

router.get('/:productType', async (req, res) => {
    let productName = req.params.productType.charAt(0).toUpperCase();
    productName += req.params.productType.slice(1).toLowerCase();
    const products = await ProductQueries.getProductsByType(productName);

    if (products.length > 0) {
        res.json(products);
    } else {
        res.json('no products were found');
    }
});

router.get('/cart', (req, res) => {
    const test = [
        { id: 2, name: 'test' }
    ]
    res.json(test);
});

module.exports = router;