/**
 * app's main routes
 */

const router = require('express').Router();
const ProductQueries = require('../../dbQueries/products');
const User = require('../../models/User')
//middleware that checks if user is logged in or if they are admin
const {authRole, userLogin} = require('../api/roles')
// web service routes
router.get('/', async (req, res) => {
    const products = await ProductQueries.getRandomProducts(10);
    res.render('index', {products, user: req.user || req.session.user});
})

router.get('/products/:productType', async (req, res) => {

    let productName = req.params.productType.charAt(0).toUpperCase();
    productName += req.params.productType.slice(1).toLowerCase();
    const products = await ProductQueries.getProductsByType(productName);

    if (products.length > 0) {
        res.render('products', {productType: productName, products, user: req.user || req.session.user});
    } else {
        res.json('no products were found');
    }
})
router.get('/cart', userLogin, (req, res) => {

    res.render('cart', {items: [], user: req.user || req.session.user});
})

// authentication routes
router.get('/login', (req, res) => {
    if (req.user || (req.session && req.session.user)) {
        res.redirect('/');
    } else {
        res.render('login', {user: null});
    }
});

router.get('/signup', (req, res) => {
    if (req.user || (req.session && req.session.user)) {
        res.redirect('/');
    } else {
        res.render('signup', {user: null});
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    req.session.user = null;
    res.redirect('/');
});
/*
test case: if a user has the roles user, which is assigned when creating an account 
by default they cannot enter the route
it sends them a response saying they aren't an authed user
if the are then the code sends authe worked 
 */
router.get('/test', authRole('admin'), async (req, res) => {
    ProductQueries.getRandomProducts(5).then(results => {
        //TODO: should send all data to admin page
        res.render('admin', {items: results,user: req.user || req.session.user})
    })
    console.log("auth worked");

})


// OAuth2 routes
const passport = require('passport');

router.get('/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    (req, res) => {
        // Successful authentication, redirect.
        res.redirect('/');
    });

module.exports = router;