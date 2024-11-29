const express = require('express');
const router = express.Router();
const User = require('../auth/User');

router.get('/', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.render('index', {user: req.user ? req.user : {}, loginUser: req.user})
})

router.get('/page', (req, res) => {
    res.render('postPage', {user: req.user ? req.user : {}})
})

router.get('/signIn', (req, res) => {
    res.render('signIn', {user: req.user ? req.user : {}})
})

router.get('/signUp', (req, res) => {
    res.render('signUp', {user: req.user ? req.user : {}})
})

router.get('/profile/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    if(user) {
        res.render('profile', {user: req.user ? req.user : {}, loginUser: req.user})
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

router.get('/new', (req, res) => {
    res.render('newPost', {user: req.user ? req.user : {}})
})

module.exports = router;