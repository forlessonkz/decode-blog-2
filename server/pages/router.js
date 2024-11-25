const express = require('express');
const router = express.Router();
const Categories = require('../../server/Categories/Categories');


router.get('/', async (req, res) => {
    try {
        const allCategories = await Categories.find();
        if(!allCategories || allCategories.length === 0) {
            return res.status(404).send('Категории не найдены')
        }
        res.render('index', { categories: allCategories })
    } catch {
        console.log('Ошибка при получении категорий:', error);
        res.status(500).send('Произошла ошибка при получении категорий.')
    }
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

router.get('/new', async (req, res) => {
    try {
        const allCategories = await Categories.find()
        if(!allCategories || allCategories.length === 0) {
            return res.status(404).send('Категории не найдены')
        }
        res.render('newPost', {categories: allCategories})
    } catch {
        console.log('Ошибка при получении категорий:', error);
        res.status(500).send('Произошла ошибка при получении категорий.')
    }
    
})

router.get('/edit', async (req, res) => {
    try {
        const allCategories = await Categories.find()
        if(!allCategories || allCategories.length === 0) {
            return res.status(404).send('Категории не найдены')
        }
        res.render('editPost', {categories: allCategories})
    } catch {
        console.log('Ошибка при получении категорий:', error);
        res.status(500).send('Произошла ошибка при получении категорий.')
    }
})


module.exports = router;