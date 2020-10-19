const User = require('../models/User');
const GoogleUser = require('../models/GoogleUser');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserQueries {
    async getUserByIdAndType(userId, jwt) {
        // check if the user is registered with their email
        let user = await User.findOne({ _id: userId, jwt });

        // if not check if they are registered with their google account
        if (!user) {
            user = await GoogleUser.findOne({ _id: userId, jwt });
        }

        // if not throw an error
        if (!user) {
            throw new Error('user not found');
        }

        return user;
    }

    async register(email, password) {
        let email_exist = await User.findOne({ email }, function (error, c) {
            if (error) {
                console.log(error);
            }
        });

        const passwordPattern = RegExp('[A-Z]+[a-z]+[0-9]+');
        if (password.length < 6 || !passwordPattern.test(password)) {
            throw new Error('password is too weak');
        }

        //creates a random salt that is used by bcrypt to hash the password
        const salt = await bcrypt.genSalt();
        //creates a hashed password from the password and the salt
        const hashedPassword = await bcrypt.hash(password, salt)
        // create a token to generate a jwt
        const token = (new Buffer.from(email, 'utf8')).toString('base64');
        //creates
        const user = new User({
            email,
            password: hashedPassword,
            jwt: jwt.sign(token, 'JWT_SECRET')
        });

        //check if email exist
        if (email_exist) {
            throw new Error("Email address exist")
        } else {
            //saves newly created user to the database using the email provided and the hashed password
            const savedUser = await user.save();
            const sessionCookie = {
                id: savedUser._id,
                jwt: savedUser.jwt,
            };
            return sessionCookie;
        }
    }

    async login(email, password) {
        //Checks to see if the user is in the database by checking against the list with their email
        var user = await User.findOne({ email });

        //Compares the password sent through the network(that is then run thought the hashing algo) with the stored hased pass if they are the same send 200 OK
        //if Password doesn't match send a 401 error
        if (!user) {
            throw new Error("no account exists with the given credentials");
        } else {
            const response = await bcrypt.compare(password, user.password);

            if (response) {
                const sessionCookie = {
                    id: user._id,
                    jwt: user.jwt
                };

                return sessionCookie;
            } else {
                throw new Error("password doesn't match");
            }
        }
    }
}

module.exports = new UserQueries();