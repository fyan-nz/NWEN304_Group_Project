const User = require('../../models/User');


//if user is not logged in then it will redirect them to the login screen
function userLogin(req, res, next) {
    if (req.session.user == null) {
        res.status(403)
        //return res.send('Please Sign in')
        return res.redirect('/login')
    }
    next()
}

//if user is not logged to an admin user account in then it will redirect them to the home screen
function authRole(role) {

    return async (req, res, next) => {
        const user = await User.findOne({ jwt: req.session.user.jwt })
        if (user.role !== role && user.role !== 'admin') {
            return res.redirect('/');
        }
        next()
    }


}
module.exports = {
    authRole,
    userLogin


}