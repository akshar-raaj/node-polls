"use strict"
const app = require('./app')

const {SERVER} = require('./constants')
const port = SERVER.PORT
const bunyan = require('bunyan')
const log = bunyan.createLogger({'name': 'server'})

app.listen(port, () => {
  log.info(`Example app listening on port ${port}`)
})
