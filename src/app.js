var express = require('express');
var app = express();

app.disable('etag');
require('./middlewares')(app);
require('./routes')(app);

module.exports = app;
