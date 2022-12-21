"use strict"
const express = require('express')

const bunyan = require('bunyan')
const log = bunyan.createLogger({'name': 'app'})

const polls = require('./polls/routes')
const {homeHandler} = require('./handlers')

const app = express()

const logRequest = function (req, res, next) {
  log.info({'event': 'request', 'path': req.path})
  next()
  log.info({'event': 'request_done', 'path': req.path})
}

app.use(logRequest)
app.use(express.json())

app.get('/', homeHandler)
app.use('/polls', polls)

module.exports = app
