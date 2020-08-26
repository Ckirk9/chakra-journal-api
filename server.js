//imports
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
require("dotenv").config()
const passport = require('./passport')

const port = process.env.Port || 5000

// middleware - JSON parsing
app.use(express.json());

// middleware - cors config
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true, 
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

app.use(session({
    store: new MongoStore({ url: process.env.MONGODB_URI  ||  'mongodb://localhost:27017/chakrajournal'}), 
    secret: "IHaveTwoDogs",
    resave: false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 *24
    }
}))

//middleware- passport config
app.use(passport.initialize())
app.use(passport.session())

//middleware- API routes
// app.use('/api/v1/ ', routes. )
app.use('/api/v1/entries', routes.entries)
app.use('/api/v1/auth', routes.auth)


app.listen(5000, () => {
    console.log('listening on port: ' + process.env.PORT)
})