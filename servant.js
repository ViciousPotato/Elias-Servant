var express = require('express')
var app = express

app.get('/payload', function(req, res) {
  console.log(req);
})