const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const port = process.env.Port || 5000

// const connectionString = 'mongodb://localhost/chakrajournal'
// const db = mongoose.connection
// mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })

// middleware - cors config
const corsOptions = {
    origin: ['http://localhost:5000'],
    credentials: true, 
    optionsSuccessStatus: 204
}

// db.on('connected', () => {
//     console.log(`Mongoose connected to ${connectionString}`)
// })

app.use(session({
    store: new MongoStore({ url: process.env.MONGODB_URI  ||  'mongodb://localhost:27017/chakrajournal'}), 
    secret: "IHaveTwoDogs",
    resave: false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 *24
    }
}))


// middleware - JSON parsing
app.use(express.json());

// middleware - cors config
// app.use(cors())


app.listen(5000, () => {
    console.log('server listening')
})