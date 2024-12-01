const express = require('express');
const router = express.Router();
const Categories = require('./Categories')
const writeDataCategories = require('./seed')
const getAllCatergories = require('./controller')

router.get('/api/category', getAllCatergories)

writeDataCategories()

module.exports = router;