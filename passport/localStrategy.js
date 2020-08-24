const User = require('../models/User')
const passport = require('passport')
// strategy refers to the way we log a user in the site 
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
    { usernameField: 'userName' },
    // verifiy the user
    function(userName, password, done) {
        // find the user via their userName
        User.findOne({ userName: userName }, (err, foundUser) => {
            if (err) return done(err)
            if (!foundUser) return done(null, false, {message: 'credentials invalid'})
            if (!foundUser.verifyPassword(password)) return done(null, false, {message: 'credentials invalid'})
            return done(null, foundUser)
        })
    }
)

module.exports = strategy