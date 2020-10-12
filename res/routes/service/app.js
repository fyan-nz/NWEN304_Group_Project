/**
 * app's main routes
 */

const router = require('express').Router();

const ProductQueries = require('../../dbQueries/products');

// web service routes
router.get('/', async (req, res) => {
    const products = await ProductQueries.getRandomProducts(10);
    res.render('index', { products, user: req.user });
})
router.get('/products/:productType', async (req, res) => {
    let productName = req.params.productType.charAt(0).toUpperCase();
    productName += req.params.productType.slice(1).toLowerCase();
    const products = await ProductQueries.getProductsByType(productName);

    if (products.length > 0) {
        res.render('products', { productType: productName, products, user: req.user });
    } else {
        res.json('no products were found');
    }
})
router.get('/cart', (req, res) => {
    res.render('cart', { items: [], user: req.user });
})

// authentication routes
router.get('/login', (req, res) => {
    if (req.user) {
        res.redirect('/');
    } else {
        res.render('login', { user: null });
    }
});

router.get('/signup', (req, res) => {
    if (req.user) {
        res.redirect('/');
    } else {
        res.render('signup', { user: null });
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});


// OAuth2 routes
const passport = require('passport');

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect.
        res.redirect('/');
    });

module.exports = router;