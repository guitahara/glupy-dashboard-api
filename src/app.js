var express = require('express')
var app = express()
require('./infrastructure/mongodb/index').connection()

app.disable('etag')
require('./middlewares')(app)
require('./routes')(app)

module.exports = app
