const db = require('../models')
const bcrypt = require('bcrypt')


const login = (req, res) => {
    console.log('req.user:', req.user)
    console.log('req.session:', req.session)
    res.json({ user: req.user.userName })
}

const signUp = (req, res) => {
    const { userName, password } = req.body 
    if (!userName || !password) {
        return res.json({
            message: 'Please enter a username and a password'
        })
    }
    // make sure user doesn't already have an account 
    db.User.findOne({ userName: userName }, (err, foundUser) => {
        if (err)     
            return res.json({
                message: 'error'
            })
        
        if (foundUser) 
            return res.json({
                message: 'this username is already in use'
            })
        
        const newUser = new db.User({
            userName,
            password,
            //preferences
        })
        console.log("Begin save user");
        newUser.save((err, savedUser) => {
            if (err) {
                res.json(err)
            }
            res.json(savedUser)
        })
        console.log("End save user");
    })
}

const signOut = (req, res) => {
    if (!req.user) return res.json({
        message: 'no user to sign out'
    })
    req.signOut()
    res.json({ message: 'user signed out'})
}

// dev function for dev use only 
// const verify = (req, res) => {

// }

module.exports = {
    login, 
    signUp,
    signOut, 
    //verify
}

