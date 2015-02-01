var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.listen(3000, function() {
  console.log('I\'m Listening...');
});
