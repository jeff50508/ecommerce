var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mysql = require('mysql2');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// var connection = mysql.createConnection({
//   host: '127.0.0.1',     // 資料庫主機名稱
//   user: 'root', // 資料庫用戶名稱
//   password: 'a656565999', // 資料庫密碼
//   database: 'products'   // 資料庫名稱
// });

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(req, res, next) {
//   req.dbConnection = connection;
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
// app.listen(3000, () => {
//   console.log('listening on 3000');
// })
// 建立連接
// connection.connect(function(err) {
//   if (err) {
//     console.error('Error connecting to MySQL database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database with ID: ' + connection.threadId);
// });

module.exports = app;
