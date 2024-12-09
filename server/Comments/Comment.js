const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    commentText: String,
    postId: {type: mongoose.Schema.Types.ObjectId, ref: 'posts'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    // timestamps: {
    //     date: 'date'
    // }
});

module.exports = mongoose.model('comment', CommentSchema);