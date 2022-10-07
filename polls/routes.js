const express = require('express')
const router = express.Router()

const pollsIndex = function (req, res) {
  res.send("Hello, world. You're at the polls index.")
}

router.get('/', pollsIndex)

module.exports = router
