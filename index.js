const express = require('express');
const session = require('express-session');
const mongooseStore = require('connect-mongo');
const passport = require('passport');
const ejs = require('ejs');
const path = require('path');


const app = express();
const PORT = 9081;

require('./server/config/db');
require('./server/config/passport')
app.set('view engine', 'ejs');
app.use(express.urlencoded())
app.use(session({
    name: 'decode.session',
    secret: 'keyboard cat',
    maxAge: 1000 * 60 * 60 * 7,
    resave: false,
    store: mongooseStore.create({
        mongoUrl: 'mongodb://localhost:27017'
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./server/pages/router'));
app.use(require('./server/Categories/router'));
app.use(require('./server/auth/router'))

app.listen(PORT, () => {
    console.log(`Server started! Please click the link ===>  http://localhost:${PORT}`)
});