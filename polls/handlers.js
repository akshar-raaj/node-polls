const {Question} = require('./models')
const pug = require('pug')

const pollsIndex = async function (req, res) {
  console.log("polls_list")
  const compiledFunction = pug.compileFile('./polls/templates/index.pug')
  let questions = await Question.findAll({order: [['pubDate', 'ASC']], limit: 5})
  const body = compiledFunction({questions: questions})
  res.send(body)
}

const pollsDetail = async (req, res) => {
  const pollId = req.params.pollId
  console.log("polls_detail: %d", pollId)
  const question = await Question.findByPk(pollId)
  if (question === null) {
    console.log("polls_detail_not_found: %d", pollId)
    res.sendStatus(404)
    return
  }
  const compiledFunction = pug.compileFile('./polls/templates/detail.pug')
  const body = compiledFunction({question: question})
  res.send(body)
}

module.exports = {
  pollsIndex: pollsIndex,
  pollsDetail: pollsDetail
}
