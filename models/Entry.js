const mongoose = require('mongoose')
const User = require('./User')

const EntrySchema = new mongoose.Schema ({
    entryDate: {type: Date, required: true},
    preferences: {},
    assessmentResults: {},
    body: {type: String, required: false},
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }]

})

const Entry = mongoose.model('Entry', EntrySchema)
module.exports = Entry