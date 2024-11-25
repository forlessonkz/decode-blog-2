const express = require('express');
const Categories = require('./Categories');
const router = express.Router();
const writeDataCategory = require('./seed');
const {getAllCategories} = require('./controller')

// Данная фуркция это get запрос для получения данных о категориях
router.get('/api/category', getAllCategories)
writeDataCategory()
module.exports = router