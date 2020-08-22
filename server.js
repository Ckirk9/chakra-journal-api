const express = require('express')
const app = express()
const mongoose = require('mongoose')


const connectionString = 'mongodb://localhost/chakrajournal'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`)
})

db.on('disconnected', () => {
    console.log('Mongoose Disconnected')
})

db.on('error', (err) => {
    console.log('Mongoose error:', (err))
})




app.listen(3000, () => {
    console.log('server listening')
})