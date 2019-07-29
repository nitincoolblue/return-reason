var express = require('express');
var repo = require('./returnReasonRepo.js');
var app = express()


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(repo.initiateDb());
});


app.get('/initiateSampleData', function (req, res) {
  res.send(repo.initiateSampleData());
});

app.get('/sample', function (req, res) {
  repo.getSample(res);
});


app.get('/:productType/:reason/subreason/', function (req, res) {
  repo.getSubReason(req.params, res);
});




app.listen(3000, () => console.log('listening on port 3000!'))