// 1. Import the libraries
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const filmsRoute = require('./routes/films')

app.use('/films', filmsRoute)

app.get('/', (req,res)=> {
    res.send('Homepage')
})

const MURL = 'add mongo conn'
mongoose.connect(MURL)
.then(()=> {
    console.log('Your mongoDB connector is on...')
})
.catch((err)=> {
    console.log(err)
})

app.listen(3000, ()=> {
    console.log('Your server is up and running...')
})