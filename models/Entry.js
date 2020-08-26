const mongoose = require('mongoose')

const EntrySchema = new mongoose.Schema ({
    entryDate: {type: Date, required: true},
    // preferences: {},
    // assessmentResults: {},
    body: {type: String, required: true},
    user: {
        type: String,
        ref: 'User',
        required: true
    }

})

const Entry = mongoose.model('Entry', EntrySchema)
module.exports = Entry