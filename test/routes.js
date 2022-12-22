const express = require('express')
const bunyan = require('bunyan')
const logger = bunyan.createLogger({name: 'test.routes'})
const testHandlers = require('./handlers')

const router = express.Router()

router.use((req, res, next) => {
    logger.info({event:'test_request'})
    req.startAt = Date.now()
    next()
    req.endAt = Date.now()
    logger.info({event: 'test_request_done'})
})

router.all('/', testHandlers.handler)

module.exports = router