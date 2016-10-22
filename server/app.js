var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
var number = 0;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/current', function (req, res) {
  res.json({id: number});
});


app.post('/current', function (req, res) {
  console.log('...........', req.body.id)
  number = parseInt(req.body.id);
  res.json(number).end(200);
});


app.listen(3007, function () {
  console.log('Example app listening on port 3007!');
});
