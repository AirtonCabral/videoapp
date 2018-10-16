var express = require('express');
var request = require('request');

var app = express();
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', function(req, res) {
    var url = 'https://sela-test.herokuapp.com/assets/hkzxv.json';
    req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 8000);