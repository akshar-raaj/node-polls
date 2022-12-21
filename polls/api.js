const {Question} = require('./models')

const bunyan = require('bunyan')
const log = bunyan.createLogger({'name': 'polls.api'})

const pollsList = async function (req, res) {
  if(req.method === 'GET')
  {
    log.info({'event': 'read'})
    const questions = Question.findAll({order: [['pubDate', 'ASC']], limit: 5})
    const data = (await questions).map((x) => {return {'id': x.id, 'questionText': x.questionText}})
    res.send(JSON.stringify(data))
  }
  else {
    const body = req.body
    log.info({'event': 'create', 'questionText': body.questionText})
    const question = Question.build({questionText: body.questionText, pubDate: new Date()})
    question.save()
    const data = {
      'id': question.id
    }
    res.send(JSON.stringify(data))
  }

}

exports.pollsList = pollsList