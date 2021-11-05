var express = require('express');
var app = express();
console.log('Hello World');

/*
app.get('/', (req, res) => {
  res.send("Hello Express");
})*/
app.get('/', (req, res) => {
  const path = __dirname + "/views/index.html"
  console.log(`path=${path}`);
  res.sendFile(path);
})

 module.exports = app;
