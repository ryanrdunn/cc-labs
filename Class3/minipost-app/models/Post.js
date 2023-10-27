// Declare constands
const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
    "user":{
        type:String,
        required:true
    },
    title:{
        type:String,
        requird:true
    },
    text:{
        type:String,
        required:true
    },
    hashtag:{
        type:String,
        requird:true
    },
    location:{
        type:String,
        requird:true
    },
    url:{
        type:String,
        requird:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('posts',PostSchema)