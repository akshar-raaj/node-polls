const express = require('express')
const router = express.Router()
const {Question} = require('./models')

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
  res.send(`You're looking at question ${pollId}. The question text is ${question.questionText}`)
}

router.get('/', pollsIndex)
router.get('/:pollId/', pollsDetail)

module.exports = router
