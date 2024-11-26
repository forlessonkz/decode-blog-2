const express = require('express');
const ejs = require('ejs');
const path = require('path');
const sessinon = require('express-session');
const mongooseStore = require('connect-mongo');


const app = express();
const PORT = 9080;

require('./server/config/db');
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(sessinon({
    name: 'decode.session',
    secret: 'Keyboard kat',
    maxAge: 1000 * 60 * 60 * 7,
    resave: false,
    store: mongooseStore.create({
        mongoUrl: 'mongodb://localhost:27017'
    })
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./server/pages/router'));
app.use(require('./server/auth/router'))

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})