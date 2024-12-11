const Comment = require('./Comment');

const saveComment = async (req, res) => {
    if(req.body.comment && req.body.userId && req.body.postId) {
        await new Comment({
            commentText: req.body.comment,
            postId: req.body.postId,
            userId: req.body.userId,
            date: Date.now()
        }).save()
    }
    res.status(200).send(true);
}

module.exports = {
    saveComment,
}