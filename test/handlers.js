const bunyan = require('bunyan')
const logger = bunyan.createLogger({'name': 'test.handlers'})

const handler = (req, res) => {
  res.send(req.method)
}

exports.handler = handler