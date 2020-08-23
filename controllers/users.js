const db = require('../models')

const index = (req, res) => {
    db.User.find({}, (err, foundUsers) => {
        if (err) console.log('Error in users#index:', err)

        if(!foundUsers.length) return res.json({
            message: 'No saved users'
        })

        res.json({ users: foundUsers})
    })
},

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) console.log('Error in users show:', err)
        if (!foundUser) return res.json({
            message: "no user found by that id"
        })
        res.json({ user: foundUser})
    })
},

const create = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if (err) console.log("error in users create:", err)
        res.json({ user: savedUser})
    })
}

const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) console.log('error in users update:', err)
        res.json({
            user: updatedUser,
            message: `${updatedUser.userName} preferences were updated successfully`
        })
    })
}

module.exports = { 
    index,
    show,
    create,
    update
}