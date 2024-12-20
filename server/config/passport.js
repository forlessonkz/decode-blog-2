const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const User = require('../auth/User');

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
    },
    function(email, password, done) {
        User.findOne({email}).then( user => {
            if(user.password) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if(err) { return done(err)}
                    if(result) {return done(null, user)}
                });
            } else {
                return done('User not found!')
            }
        }).catch(e => {
            return done(e)
        })
    }
))

passport.serializeUser(function(user, done){
    done(null, user._id)
});

passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then((user) => {
            done(null, user)
        })
        .catch(err => {
            done(err, null)
        })
})