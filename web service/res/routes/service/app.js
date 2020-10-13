/**
 * app's main routes
 */

const router = require('express').Router();

const ProductQueries = require('../../dbQueries/products');

// web service routes
router.get('/products/:productType', async (req, res) => {
    let productName = req.params.productType.charAt(0).toUpperCase();
    productName += req.params.productType.slice(1).toLowerCase();
    const products = await ProductQueries.getProductsByType(productName);

    if (products.length > 0) {
        res.json({ products });
    } else {
        res.json('no products were found');
    }
})
router.get('/cart', (req, res) => {
    res.render('cart', { items: [], user: req.user || req.session.user });
})

router.get('/logout', (req, res) => {
    req.logout();
    req.session.user = null;
    res.redirect('/');
});

module.exports = router;