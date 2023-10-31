const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
app.use(bodyParser.json())

// Create and Map Routes
const filmsRoute = require('./routes/films')
const authRoute = require('./routes/auth')

// These are the endpoints
app.use('/api/film', filmsRoute)
app.use('/api/user', authRoute)

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTOR).then(()=>{
    console.log('Connected to MongoDB!')
}).catch((err)=> {
    console.log(err)
})

// Open and listen on Port 3000
app.listen(3000, ()=> {
    console.log('Server is up and runnning')
})