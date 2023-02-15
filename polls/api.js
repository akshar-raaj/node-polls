const {Question} = require('./models')

const bunyan = require('bunyan')
const logger = bunyan.createLogger({'name': 'polls.api'})

const pollsList = function (req, res, next) {
  if(req.method === 'GET')
  {
    logger.info({'event': 'read'})
    const promise = Question.findAll({order: [['pubDate', 'ASC']], limit: 5})
    promise.then((questions) => {
      const data = questions.map((x) => {return {'id': x.id, 'questionText': x.questionText}})
      res.json(data)
    })
  }
  else {
    const body = req.body
    logger.info({'event': 'create', 'questionText': body.questionText})
    const question = Question.build({questionText: body.questionText, pubDate: new Date()})
    let promise = question.save()
    const success = function (question) {
      const data = {
        'id': question.id
      }
      res.status(201).json(data)
    }
    const error = function (error) {
      logger.info({'event': 'create_error'}, error.message)
      res.status(400).json({message: error.message})
    }
    promise.then(success, error)
  }

}

exports.pollsList = pollsList