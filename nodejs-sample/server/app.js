var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');

var app = express();

// view engine setup
 

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
 
app.use(app.router);

//app.get('/', routes.index);
//app.get('/users', users.list);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

 
/**
* Development Settings
*/

if ('development' == app.get('env')) {
    // This will change in production since we'll be using the dist folder
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));
    app.use(express.errorHandler());
}

/**
* Production Settings
*/
if ('production' == app.get('env')) {
    app.use(express.static(path.join(__dirname, '/dist')));
}
// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});


module.exports = app;
