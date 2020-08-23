const mongoose = require('mongoose')
const Entry = require('./Entry')

const UserSchema = mongoose.Schema({
    userName: {type: String, required: true },
    password: {type: String, required: true},
    preferences: {type: Boolean, required: false},
    entries: [{type: mongoose.Schema.Types.ObjectId, 
        ref: 'Entry', 
        required: false
    }]
})

const User = mongoose.model('User', userSchema)
module.exports = User