const mongoose = require('mongoose')
const User = require('./User')

const entrySchema = new mongoose.Schema ({
    preferences: {},

})

const Entry = mongoose.model('Entry', entrySchema)
module.exports = Entry