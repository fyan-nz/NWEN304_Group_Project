/* 
 *  OAuth configuration
*/
const passport = require('passport');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: '571513238390-v4v9lkk9u3n5ul535i8jmjsrodee9h2t.apps.googleusercontent.com',
    clientSecret: 'pHj_HrL3pNmH9COaZo1ik_P2',
    callbackURL: "http://localhost:5000/auth/google/callback"
},
    (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
    }
));