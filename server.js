var express = require('express');
var path = require('path');
var open = require('open');

var port = 4000;
var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res){
    console.log(path.join(__dirname, '../NVMApp/index.html'));
    res.sendFile(path.join(__dirname, '../NVMApp/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})
