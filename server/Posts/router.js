const express = require('express');
const router = express.Router();
const { createPost, editPost } = require('./controller');
const {upload} = require('./multer');
const {isAuth} = require('../auth/middlewares')

router.post('/api/post/new', isAuth, upload.single('image'), createPost);
router.post('/api/post/edit', isAuth, upload.single('image'), editPost);

module.exports = router;