var express = require('express');
var app = express();
var globalController = require('./globalController')

app.set('view engine', 'ejs')
app.use('/', express.static('Ativos'));

globalController(app);
app.listen(8001);
console.log("ligando")








