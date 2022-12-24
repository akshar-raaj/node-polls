"use strict"
const express = require('express')

const bunyan = require('bunyan')
const logger = bunyan.createLogger({'name': 'app'})

const polls = require('./polls/routes')
const {homeHandler} = require('./handlers')
const test = require('./test/routes')

const app = express()

const logRequest = function (req, res, next) {
  logger.info({'event': 'request', 'path': req.path})
  next()
}

app.use(logRequest)
app.use(express.json())

app.get('/', homeHandler)
app.use('/polls', polls)
app.use('/test', test)

module.exports = app
