const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Entry = require('./Entry')

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true },
    password: {type: String, required: true},
    preferences: {type: Boolean, required: false},
    entries: [{type: mongoose.Schema.Types.ObjectId, 
        ref: 'Entry', 
        required: false
    }]
})

UserSchema.methods = {
    verifyPassword: function (passwordInput) {
        return bcrypt.compareSync(passwordInput, this.password)
    },

    hashPassword: function (plainTextPassword) {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(plainTextPassword, salt)
    }
}

UserSchema.pre('save', function(next) {
    if (!this.password) {
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User