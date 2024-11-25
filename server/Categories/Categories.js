const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
    categoryName: String,
    key: Number,
});


module.exports = mongoose.model('category', CategoriesSchema);