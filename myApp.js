require('dotenv').config();
var express = require('express');
var app = express();
console.log('Hello World');
app.use('/public', express.static(__dirname + '/public'));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})

/*
app.get('/', (req, res) => {
  res.send("Hello Express");
})*/
app.get('/', (req, res) => {
  const path = __dirname + "/views/index.html"
  console.log(`path=${path}`);
  res.sendFile(path);
})

/*
app.get('/json', (req, res) => {
  res.json({"message": "Hello json"});
})*/

app.get('/json', (req, res) => {
  res.json( {"message": process.env.MESSAGE_STYLE === 'uppercase' ? "HELLO JSON" : "Hello json"});
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time })
})

module.exports = app;
