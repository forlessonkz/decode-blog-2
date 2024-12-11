const express = require('express');
const router = express.Router();
const User = require('../auth/User');
const Categories = require('../Categories/Categories');
const Posts = require('../Posts/Post');
const Comment = require('../Comments/Comment')

router.get('/', async (req, res) => {

    const options = {}
    const categories = await Categories.findOne({key : req.query.postCategory})

    if(categories) {
        options.postCategory = categories._id;
    }

    let page = 0;
    const limit = 2;

    if(req.query.page && req.query.page > 0) {
        page = req.query.page
    }

    if(req.query.search && req.query.search.length > 0) {
        options.$or = [
            {
                postTitle: new RegExp(req.query.search, 'i')
            },
            {
                postDescription: new RegExp(req.query.search, 'i')
            }
        ];
        res.locals.search = req.query.search
    }

    const totalPosts = await Posts.countDocuments(options) 

    const allCategories = await Categories.find()
    const user = await User.findById(req.params.id)
    const posts = await Posts.find(options).limit(limit).skip(page * limit).populate('postCategory').populate('author')
    res.render('index', {
        posts: posts, 
        categories: allCategories, 
        user: req.user ? req.user : {}, 
        loginUser: req.user,
        pages: Math.ceil(totalPosts / limit)
    })
})

router.get('/post-page/:id', async (req, res) => {
    const comments = await Comment.find({postId: req.params.id}).populate('userId');
    console.log(comments)
    const post = await Posts.findById(req.params.id).populate('postCategory').populate('author')
    res.render('postPage', {
        user: req.user ? req.user : {}, 
        post: post,
        comments: comments,
    })
})

router.get('/signIn', (req, res) => {
    res.render('signIn', {user: req.user ? req.user : {}})
})

router.get('/signUp', (req, res) => {
    res.render('signUp', {user: req.user ? req.user : {}})
})

router.get('/profile/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    const allCategories = await Categories.find()
    const posts = await Posts.find().populate('postCategory').populate('author')
    if(user) {
        res.render('profile', {
            posts: posts,
            categories: allCategories, 
            user: user, 
            loginUser: req.user
        })
    } else {
        res.redirect('/not-found')
    }

})

router.get('/admin/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.render('admin', {user: req.user ? req.user : {}, loginUser: req.user})
})


router.get('/not-found', (req, res) => {
    res.render('notFound', {user: req.user ? req.user : {}})
})

router.get('/new', async (req, res) => {
    const allCategories = await Categories.find()
    res.render('newPost', {categories: allCategories, user: req.user ? req.user : {}})
})

router.get('/edit/:id', async (req, res) => {
    const allCategories = await Categories.find()
    const post = await Posts.findById(req.params.id)
    res.render('edit', {categories: allCategories, user: req.user ? req.user : {}, post, })
})

module.exports = router;