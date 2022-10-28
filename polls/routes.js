"use strict"

const express = require('express')
const router = express.Router()

const {pollsIndex, pollsDetail} = require('./handlers')

router.get('/', pollsIndex)
router.get('/:pollId/', pollsDetail)

module.exports = router
