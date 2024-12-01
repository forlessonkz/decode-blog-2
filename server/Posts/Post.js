const mongoose = require('mongoose');
// const Schema = mongoose.Schema

const PostSchema = mongoose.Schema({
    postTitle: String,
    postCategory: {type: mongoose.Schema.Types.ObjectId, ref: 'categories'},
    postDescription: String,
    image: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
});

module.exports = mongoose.model('posts', PostSchema);