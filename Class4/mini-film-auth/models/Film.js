// Connect with mongoose
const mongoose = require('mongoose')

// Define Schema
const filmSchema = mongoose.Schema({
    film_name:{
        type:String
    },
    film_type:{
        type:String
    },
    film_year:{
        type:String
    },
    film_link:{
        type:String
    }
})

// Export the model to mongoose for mapping
module.exports = mongoose.model('films', filmSchema)