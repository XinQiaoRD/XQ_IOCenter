var express = require('express'),
    app     = express(),
    http    = require('http'),
    server  = http.Server(app),
    path    = require('path'),
    ejs     = require('ejs'),
    fs      = require('fs'),
    $       = require('jquery');

var ws      = require('./ws_server.js');


////////////// 服务器模块 /////////////
var port = 3009;
var uri  = "IOCenter/resources/";

app.set('views', uri+'root');
app.use(express.static(uri+'root'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');



//讲解员端
app.get('/guide', function(req, res){
    res.render('guide', {});
});

server.listen(port, function() {
    console.log('中控Server端系统(端口：'+port+')');
});