/**
 * api routes
 */
const router = require('express').Router();
const ProductQueries = require('../../dbQueries/products');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const CartQueries = require('../../dbQueries/cart');

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
        res.status(400).send('email paramter is missing')
        return;
    }

    if (!req.query.password) {
        res.status(400).send('password paramter is missing')
        return;
    }

    let email_exist = await User.findOne({ email: req.query.email }, function (error, c) {
        if (error) {
            console.log(error);
        }
    });
    //creates a random salt that is used by bcrypt to hash the password
    const salt = await bcrypt.genSalt();
    //creates a hashed password from the password and the salt
    const hashedPassword = await bcrypt.hash(req.query.password, salt)
    // create a token to generate a jwt
    const token = (new Buffer.from(req.query.email, 'utf8')).toString('base64');
    //creates
    const user = new User({
        email: req.query.email,
        password: hashedPassword,
        jwt: jwt.sign(token, 'JWT_SECRET')
    });
    try {
        //check if email exist
        if (email_exist) {
            res.status(401).send("email already registered");
        } else {
            //saves newly created user to the database using the email provided and the hashed password
            const savedUser = await user.save();
            req.session.user = {
                id: savedUser._id,
                jwt: savedUser.jwt,
            };
            res.status(200).send("registration successful");
        }
    } catch
    (err) {
        res.status(400).send(err);
    }
});

//POST route for Login
router.post('/login', async (req, res) => {
    if (!req.query.email) {
        res.status(400).send('email paramter is missing')
        return;
    }

    if (!req.query.password) {
        res.status(400).send('password paramter is missing')
        return;
    }

    //Checks to see if the user is in the database by checking against the list with their email
    var user = await User.findOne({ email: req.query.email });

    try {
        //Compares the password sent through the network(that is then run thought the hashing algo) with the stored hased pass if they are the same send 200 OK
        //if Password doesn't match send a 401 error
        if (!user) {
            // console.log("inside try","user===undefined?",user===undefined)
            // console.log("inside try","user==undefined?",user==undefined)
            // console.log("inside try","triggered")
            console.log("password doesn't match");
            res.status(401).send("password doesn't match")
        } else {
            const response = await bcrypt.compare(req.query.password, user.password);

            if (response) {
                req.session.user = {
                    id: user._id,
                    jwt: user.jwt
                };
                res.status(200).send("login successful");
            } else {
                console.log("password doesn't match");
                res.status(401).send("password doesn't match")
            }

            //any other errors are caught and a 400 error is sent
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router;