var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const expHbs = require('express3-handlebars');
var bodyParser = require('body-parser');

const bookRoute = require('./routes/book');

var indexRouter = require('./routes/index');


var app = express();

app.engine('hbs', expHbs({ defaultLayout: 'layout', extname: '.hbs' })) 
app.set('view engine', 'hbs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//parse application/x-www-form-urlencoded // used to send any files
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json  //used to send names
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/book',bookRoute);

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
app.listen (8000,()=>{
  console.log(`server is listning on ${8000}`);  
})
module.exports = app;
