
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var mongoExpress = require('express-mongo-db');
var mongoose = require('mongoose'),

global.appRoot = path.resolve(__dirname);

var config = require('./config/config');
// var mongo = require('./models/mongo');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
// var potato = require('./routes/potato');

var middleware = require('./middleware/middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('config', config);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(middleware({cookies: true, logger: false}));
// app.use(mongoExpress(config.MONGO_URL + '/' + config.DATABASE ));

// connect to MongoDB
mongoose.connect(config.MONGO_URL + '/' + config.DATABASE);

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
// app.use('/potato', potato);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// mongo.init(function (error) {
//     if (error)
//         throw error;

//     app.listen(80); //database is initialized, ready to listen for connections
// });

module.exports = app;
