/**
 * api routes
 */
const router = require('express').Router();
const ProductQueries = require('../../dbQueries/products');
const CartQueries = require('../../dbQueries/cart');
const UserQueries = require('../../dbQueries/users');

// products api endpoints
router.get('/products/:productType', async (req, res) => {
    let productName = req.params.productType.charAt(0).toUpperCase();
    productName += req.params.productType.slice(1).toLowerCase();
    const products = await ProductQueries.getProductsByType(productName);

    if (products.length > 0) {
        res.json(products);
    } else {
        res.json('no products were found');
    }
});

router.get('/cart', async (req, res) => {
    const userInfo = req.session.user;
    const items = await CartQueries.getUsersCart(userInfo.id, userInfo.jwt);

    res.json(items);
})


// auth api endpoints
//POST Route for registration
router.post('/register', async (req, res) => {

    if (!req.query.email) {
        res.status(400).json({ message: 'email paramter is missing' })
        return;
    }

    if (!req.query.password) {
        res.status(400).json({ message: 'password paramter is missing' })
        return;
    }

    try {
        const result = await UserQueries.register(req.query.email, req.query.password);
        req.session.user = result;
        res.status(200).json({ message: 'registration successful' });
    } catch (err) {
        if (err.message.includes("Email address exist")) {
            res.status(401).json({ message: "Email address exist" });
        } else if (err.message.includes('password is too weak')) {
            res.status(401).json({ message: "password is too weak" });
        } else {
            res.status(400).json({ message: "something went wrong" });
        }
    }
});

//POST route for Login
router.post('/login', async (req, res) => {
    if (!req.query.email) {
        res.status(400).json({ message: 'email paramter is missing' })
        return;
    }

    if (!req.query.password) {
        res.status(400).json({ message: 'password paramter is missing' })
        return;
    }

    try {
        const result = await UserQueries.login(req.query.email, req.query.password);
        req.session.user = result;
        res.status(200).json({ message: "login successful" });
    } catch (err) {
        if (err.message.includes("password doesn't match")) {
            res.status(401).json({ message: "password doesn't match" });
        } else if (err.message.includes("no account exists with the given credentials")) {
            res.status(400).json({ message: "no account exists with the given credentials" });
        } else {
            res.status(400).json({ message: "something went wrong" });
        }
    }
})

router.post('/logout', (req, res) => {
    req.logout();
    req.session.user = null;
    res.status(200).json({ message: 'logout successful' });
});

module.exports = router;