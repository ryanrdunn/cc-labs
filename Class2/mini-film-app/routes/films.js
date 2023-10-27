const express = require('express')
const router = express.Router()
const Film = require('../models/Film')

router.get('/', async (req,res)=> {
    try {
        const films = await Film.find().limit(5)
        res.send(films)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:filmId', async(req,res)=>{
    try {
        const filmById = await Film.findById(req.params.filmId)
        res.send(filmById)
    } catch (error) {
        
    }
})

module.exports = router