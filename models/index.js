const mongoose = require('mongoose');
require("dotenv").config()

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/chakrajournal'
console.log('Connection string: ', connectionString);


const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

// mongoose.connect(connectionString, configOptions)
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(`MongoDB connection error: ${err}`))

//DB connection
const db = mongoose.connection

mongoose.connect(process.env.MONGODB_URI, configOptions)

db.on('connected', () => console.log(`Mongoose connected to ${process.env.MONGODB_URI}`))
db.on('disconnected', () => console.log('Mongoose disconnected'))
db.on('error', (err) => console.log('Mongoose error', err))

module.exports = {
    Entry: require('./Entry'),
    User: require('./User')
}
