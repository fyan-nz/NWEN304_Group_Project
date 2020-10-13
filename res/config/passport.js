/* 
 *  OAuth configuration
*/
const passport = require('passport');
const GoogleUser = require('../models/GoogleUser');
const jwt = require('jsonwebtoken');

passport.serializeUser((user, done) => {
    done(null, { id: user._id, jwt: user.jwt });
});

passport.deserializeUser(async (userInfo, done) => {
    done(null, userInfo);
});

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: '571513238390-v4v9lkk9u3n5ul535i8jmjsrodee9h2t.apps.googleusercontent.com',
    clientSecret: 'pHj_HrL3pNmH9COaZo1ik_P2',
    callbackURL: "http://localhost:5000/auth/google/callback"
},
    async (accessToken, refreshToken, profile, done) => {
        const user = await GoogleUser.findOne({ googleId: profile.id });

        if (user) {
            return done(null, user);
        } else {
            const token = (new Buffer.from(profile.emails[0].value, 'utf8')).toString('base64');
            const newUser = await new GoogleUser({
                googleId: profile.id,
                email: profile.emails[0].value,
                jwt: jwt.sign(token, 'JWT_SECRET')
            }).save();

            return done(null, newUser);
        }
    }
));