const {Question} = require('./models')
const pug = require('pug')

const bunyan = require('bunyan')
const logger = bunyan.createLogger({'name': 'polls.handlers'})

const pollsIndex = function (req, res) {
  logger.info({'event': 'polls_list'})
  const compiledFunction = pug.compileFile('./polls/templates/index.pug')
  let promise = Question.findAll({order: [['pubDate', 'ASC']], limit: 5})
  promise.then((questions) => {
    const body = compiledFunction({questions: questions})
    res.send(body)
    logger.info({'event': 'polls_list_success'})
  })
}

const pollsDetail = async (req, res) => {
  const pollId = req.params.pollId
  logger.info({'event': 'polls_detail', 'identifier': pollId})
  let promise = Question.findByPk(pollId)
  promise.then((question) => {
    if (question === null) {
      logger.info({'event': 'polls_detail_not_found', 'identifier': pollId})
      res.sendStatus(404)
      return
    }
    const compiledFunction = pug.compileFile('./polls/templates/detail.pug')
    const body = compiledFunction({question: question})
    res.send(body)
    logger.info({'event': 'polls_detail_success', 'identifier': pollId})
  })
}

module.exports = {
  pollsIndex: pollsIndex,
  pollsDetail: pollsDetail
}
