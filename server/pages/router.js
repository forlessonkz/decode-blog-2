const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/page', (req, res) => {
    res.render('postPage')
})

router.get('/signIn', (req, res) => {
    res.render('signIn')
})

router.get('/signUp', (req, res) => {
    res.render('signUp')
})

router.get('/profile', (req, res) => {
    res.render('profile')
})

router.get('/new', (req, res) => {
    res.render('newPost')
})

module.exports = router;