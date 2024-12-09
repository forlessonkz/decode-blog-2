const express = require('express');
const router = express.Router();
const {saveComment} = require('./controller')

router.post('/api/send-comment', saveComment )

module.exports = router;