const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser')
const session = require('express-session');
const mongooseStore = require('connect-mongo');
const passport = require('passport');



const app = express();
const PORT = 9081;

require('./server/config/db');

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/passport')
app.use(session({
    name: 'decode.session',
    secret: 'Keyboard kat',
    maxAge: 1000 * 60 * 60 * 7,
    resave: false,
    saveUninitialized: false,
    store: mongooseStore.create({
        mongoUrl: 'mongodb://localhost:27017'
    })
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(require('./server/pages/router'));
app.use(require('./server/Categories/router'));
app.use(require('./server/auth/router'));
app.use(require('./server/Posts/router'));
app.use(require('./server/Comments/router'))


app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});