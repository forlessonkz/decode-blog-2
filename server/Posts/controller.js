const Post = require('./Post');
const fs = require('fs');
const path = require('path');

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

const editPost = async (req, res) => {
    if(
        req.file &&
        req.body.postCategory.length > 2 &&
        req.body.postTitle.length > 2 && 
        req.body.postDescription.length > 2
    ) {
        const post = await Post.findById(req.body.id);
        const filePath = path.join(__dirname + '../../../public' + post.image)
        if(fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        } else {
            console.warn(`File not fownd: ${filePath}`)
        }
        
        post.postCategory = req.body.postCategory,
        post.postTitle = req.body.postTitle;
        post.postDescription = req.body.postDescription;
        post.image = `/image/posts/${req.file.filename}`;
        post.save();

        // await Post.findByIdAndUpdate(req.body.id, {
        //     postCategory: req.body.postCategory,
        //     postTitle: req.body.postTitle,
        //     postDescription: req.body.postDescription,
        //     image: `/image/posts/${req.file.filename}`
        // })
        res.redirect('/')
    } else {
        res.redirect(`/edit/${req.body.id}?error=1`)
    }
}

const deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if(post) {
        fs.unlinkSync(path.join(__dirname + '../../../public' + post.image));
        await Post.deleteOne({_id: req.params.id});
        res.status(200).send('ok')
    } else {
        res.status(404).send('Not found!')
    }
}

module.exports = {
    createPost,
    editPost,
    deletePost
};