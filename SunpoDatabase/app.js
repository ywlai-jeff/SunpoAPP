var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// DataBase phpmyadmin 
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "sophia.cs.hku.hk",
  user: "ywlai",
  password: "YZjNGaaa",
  database: "ywlai"
});
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db con ' + err);
    return;
  }
  console.log('Connection established');
});

// app.get('/users', function (req, res) {
//   connection.connect();

//   connection.query('SELECT * FROM Sunposales', function (error, results, fields) {
//     if (error) throw error;
//     res.send(results)
//   });

//   connection.end();
// });

// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });

// Database local mongodb
var mongo = require('mongodb'); 
var monk = require('monk');
var db = monk('localhost:27017/sunpo');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var servRouter = require('./routes/socialservice');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db(phpmyadmin) accessible to our router
app.use(function(req,res,next){
  req.con = con;
  next();
});

// Make our db(mongodb) accessible to routers 
app.use(function(req,res,next){
  req.db = db; next();
  });
  
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', servRouter);

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

//module.exports = app;
var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
})
