const Post = require('./Post')

const createPost = async (req, res) => {
    if(
        req.file && 
        req.body.postTitle.length > 2 && 
        req.body.postDescription.length > 2
    ) {
        await new Post ({
            postTitle: req.body.postTitle,
            postCategory: req.body.postCategory,
            postDescription: req.body.postDescription,
            image: `/image/posts/${req.file.filename}`,
            author: req.user._id,
        }).save();
        res.redirect(`/profile/${req.user._id}`)
    }else{
        res.redirect('/new?error=1')
    }
}

module.exports = {createPost};