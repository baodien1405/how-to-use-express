var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(require, response) {
    response.send('<h1>Hello world</h1>');
});

app.get('/users', function(require, response) {
    response.send('User list');
});

app.listen(port, function() {
    console.log('Server listen on port ' + port);
});