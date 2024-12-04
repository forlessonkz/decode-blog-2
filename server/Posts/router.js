const express = require('express');
const router = express.Router();
const { createPost, editPost, deletePost} = require('./controller');
const {upload} = require('./multer');
const {isAuth} = require('../auth/middlewares')

router.post('/api/post/new', isAuth, upload.single('image'), createPost);
router.post('/api/post/edit', isAuth, upload.single('image'), editPost);
router.delete('/api/posts/:id', isAuth, deletePost);

module.exports = router;