const User = require('../models/User');
const GoogleUser = require('../models/GoogleUser');

class UserQueries {
    async getUserByIdAndType(userId, jwt) {
        // check if the user is registered with their email
        let user = await User.findOne({ _id: userId, jwt });

        // if not check if they are registered with their google account
        if (!user) {
            user = await GoogleUser.findOne({ googleId: userId, jwt });
        }

        // if not throw an error
        if (!user) {
            throw new Error('user not found');
        }

        return user;
    }
}

module.exports = new UserQueries();