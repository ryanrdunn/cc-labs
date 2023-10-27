// Declare constants for express app
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// Dont need to declare variable, just need to require and 
require('dotenv/config')

const bodyParser = require('body-parser')
const postsRoute = require('./routes/posts')
const { mongo } = require('mongoose')
app.use(bodyParser.json())
app.use('/posts', postsRoute)

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTOR)
.then(()=> {
    console.log('DB is now connected!')
})
.catch((err)=> {
    console.log(err)
})

// Create Routes
app.get('/', (req,res) => {
    res.send('Homepage')
})


// Listen on port
app.listen(3000, ()=> {
    console.log('Server is up and running...')
})