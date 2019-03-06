require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const passport = require('passport');


const { DBURL } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(DBURL)
  .then(() => {
    console.log(`Connected to Mongo on ${DBURL}`)
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


var whitelist = [
  'http://localhost:3000'
];
var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

app.use(cors(corsOptions));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// app.use(passport.initialize());
// app.use(passport.session());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

// app.use(session({
//   secret: 'angular auth passport secret shh',
//   resave: true,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     maxAge: 2419200000
//   },
//   store: new MongoStore({ mongooseConnection: mongoose.connection })
// }));
app.use(session({
  secret:"some secret goes here",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })

}));
require('./passport')(app);






app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


const authRoutes = require('./routes/auth-routes');
app.use('/api', authRoutes);

const cardRoutes = require('./routes/card-routes');
app.use('/api', cardRoutes);

const authVeteRoutes = require('./routes/authVete-routes');
app.use('/api',authVeteRoutes)

app.use((req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});



module.exports = app;