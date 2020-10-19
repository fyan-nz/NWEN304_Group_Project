const express = require('express');
const app = express();
//Allows express to read json data
app.use(express.json())
// allows cross origin resource sharing
const cors = require('cors');
app.use(cors());

// setup passport
const passport = require('passport');
const passportSetup = require('./res/config/passport');

// configure database connection
const mongoose = require('mongoose');
const dbUrl = require('./res/config/dbConfig');

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
// make sure that the connection has been established
mongoose.connection.once(('open'), () => {
  console.log('connected to the database!');
});

// OAuth session cookies configuration
const session = require('express-session');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET',
  rolling: true,
  cookie: {
    // the cookie expires after 1 hour
    maxAge: 1 * 60 * 60 * 1000
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// tell express to use ejs as the view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

const serviceRoutes = require('./res/routes/service/app');
const api = require('./res/routes/api/index');
const cartApi = require('./res/routes/api/cart');

// web service routes
app.use('/', serviceRoutes);

// api routes
app.use('/api', api);

// cart api routes
app.use('/cart', cartApi);

app.listen(5000, () => {
  {
    console.log("Listening");
  }
})


module.exports = { app, mongoose };