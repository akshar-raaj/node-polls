"use strict"
const express = require('express')
const polls = require('./polls/routes')
const {homeHandler} = require('./handlers')

const app = express()

app.get('/', homeHandler)
app.use('/polls', polls)

module.exports = app
