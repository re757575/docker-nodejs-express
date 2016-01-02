var express = require('express');
var bodyParser = require('body-parser');

// Constants
var PORT = 8080;

// App
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello docker\n');
});

app.post('/add', function(req, res) {
  res.json({
    "error": false,
    "message": "success",
    "data": req.body.num1 + req.body.num2
  });
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
