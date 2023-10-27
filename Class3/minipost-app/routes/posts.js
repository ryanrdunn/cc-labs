// Declare Consts
const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

// POSTS are Creating Data
router.post('/', async(req,res)=> {
    const postData = new Post({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hashtag:req.body.hashtag,
        location:req.body.location,
        URL:req.body.url
    })
    try {
        const postToSave = await postData.save();
        res.send(postToSave)
    } catch (err) {
        res.send({message:err})
    }
    
})

// GET is Reading Data 
router.get('/', async(req,res) => {
    try {
        const getPosts = await Post.find()
        res.send(getPosts)
    } catch (error) {
        res.send({message:error})
    }
})

// GET this route is Reading Data for individual record
router.get('/:postId', async(req,res) => {
    try {
        const getPostById = await Post.findById(req.params.postId)
        res.send(getPostById)
    } catch (error) {
        res.send({message:error})
    }
})


// PATCH is updating Data
router.patch('/:postId', async(req,res) => {
    const postData = new Post({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hashtag:req.body.hashtag,
        location:req.body.location,
        URL:req.body.url
    })

    try {
        const updatePostById = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{
                user:req.body.user,
                title:req.body.title,
                text:req.body.text,
                hashtag:req.body.hashtag,
                location:req.body.location,
                URL:req.body.url
                }
            })
        res.send(updatePostById)
    } catch (error) {
        res.send({message:error})
    }

})

// DELETE is Deleting Data
router.delete('/:postId', async(req,res) => {
    try {
        const deletePostById = await Post.deleteOne({_id: req.params.postId})
        res.send(deletePostById)
    } catch (error) {
        res.send({message:error})
    }
})
module.exports = router