const passport = require('passport');
const User = require('../auth/User');
const bcrypt = require('bcrypt');
const LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    function(email, password, done) {
        console.log(email)
        console.log(password)
    }

))