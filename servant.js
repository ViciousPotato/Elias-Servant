var express = require('express');
var app = express();
var exec = require('child_process').exec;

app.post('/elias-github-events/:evt', function(req, res) {
  console.log("Elias got some commits, updating...");
  
  exec("cd ../Elias ; git pull origin master",
         function(error, stdout, stderr) {
           console.log(stdout);
           console.log(stderr);
         });

  res.send("ok");
})

app.listen(9000)
