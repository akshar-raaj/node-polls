const bunyan = require('bunyan')
const logger = bunyan.createLogger({'name': 'test.handlers'})

const handler = (req, res) => {
  const delay = 4000
  const start = Date.now()
  const till = start + delay
  logger.info('using timeout')
  setTimeout(() => {res.send(req.method)}, delay)
  //res.send(req.method)
}

const syncHandler = (req, res) => {
  const delay = 4000
  const start = Date.now()
  const till = start + delay
  while(Date.now() < till) {

  }
  res.send("sync")
}

exports.handler = handler
exports.syncHandler = syncHandler