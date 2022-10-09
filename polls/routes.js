const express = require('express')
const router = express.Router()
const {Question} = require('./models')
const pug = require('pug')

const pollsIndex = function (req, res) {
  res.send("Hello, world. You're at the polls index.")
}

const pollsDetail = async (req, res) => {
  const pollId = req.params.pollId
  const question = await Question.findByPk(pollId)
  if (question === null) {
    res.sendStatus(404)
    return
  }
  const compiledFunction = pug.compileFile('./polls/templates/detail.pug')
  const body = compiledFunction({question: question})
  res.send(body)
}

router.get('/', pollsIndex)
router.get('/:pollId/', pollsDetail)

module.exports = router
