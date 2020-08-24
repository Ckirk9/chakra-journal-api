const mongoose = require('mongoose')


const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/chakrajournal'
console.log('Connection string: ', connectionString);


const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(`MongoDB connection error: ${err}`))

module.exports = {
    Entry: require('./Entry'),
    User: require('./User')
}
