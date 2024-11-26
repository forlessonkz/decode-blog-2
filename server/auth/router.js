const express = require('express');
const passport = require('passport');
const router = express.Router();
const {signUp, signIn} = require('./controller');


router.post('/api/signup', signUp);
router.post(
    '/api/signuin', 
    passport.authenticate('local', {
        failureRedirect: '/signIn?error=1'
    }),
    signIn
);

module.exports = router;