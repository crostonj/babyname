var express = require('express');
var app = express();
var os = require("os");
var babyNames = require('./babyNames')();


var port = 443;


app.get('/', function (req, res) {

    res.send("Hello World");
});

app.get('/girls', function (req, res) {
    var rank = req.query["rank"];
    res.send(babyNames.getGirlName(rank));
});

app.get('/boys', function (req, res) {
    var rank = req.query['rank'];
    res.send(babyNames.getBoyName(rank));
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});