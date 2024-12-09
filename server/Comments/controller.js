const Comment = require('./Comment');

const saveComment = async (req, res) => {
    if(req.body.comment && req.body.userId && req.body.postId) {
        await new Comment({
            commentText: req.body.comment,
            postId: req.body.userId,
            userId: req.body.postId,
        }).save()
    }
    console.log(req.body);
    res.send('ok');
}

module.exports = {
    saveComment,
}