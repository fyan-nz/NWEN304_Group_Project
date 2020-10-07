const router = require('express').Router()
const bcrypt = require('bcrypt');
const {response} = require('express');
const User = require('./User')

//POST Route for registration
router.post('/register', async (req, res) => {
    let email_exist = await User.findOne({email: req.body.email}, function (error, c) {
        if (error) {
            console.log(error);
        }
    });
    //creates a random salt that is used by bcrypt to hash the password
    const salt = await bcrypt.genSalt();
    //creates a hashed password from the password and the salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    //creates
    const user = new User({
        email: req.body.email,
        password: hashedPassword,

    });
    try {
        //check if email exist
        if (email_exist) {
            res.status(401).send("email already registered");
        } else {
            //saves newly created user to the database using the email provided and the hashed password
            const savedUser = await user.save();
            res.send({
                email: req.body.email,
                password: hashedPassword,
            });
        }
    } catch
        (err) {
        res.status(400).send(err);
    }

});

//POST route for Login
router.post('/login', async (req, res) => {

    //Checks to see if the user is in the database by checking against the list with their email
    var user = await User.findOne({email: req.body.email}, function (error, c) {
        if (error) {
            console.log(error);
        }
        // console.log(c);
        console.log(req.body)
        console.log(user);
        // console.log("user undefined?",user===undefined)
        // console.log("user:",user)
    })


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
            await bcrypt.compare(req.body.password, user.password, function (err, response) {
                if (err) {
                    console.log(err)
                }

                if (response) {
                    res.status(200).send("login successful")
                    console.log('logged in')
                } else {
                    console.log("password doesn't match");
                    res.status(401).send("password doesn't match")
                }
            })

            //any other errors are caught and a 400 error is sent
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }


})

module.exports = router;
