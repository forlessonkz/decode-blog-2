const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    commentText: String,
    postId: {type: mongoose.Schema.Types.ObjectId, ref: 'posts'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    date: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('comment', CommentSchema);