"use strict"

const express = require('express')
const router = express.Router()

const {pollsIndex, pollsDetail} = require('./handlers')
const {pollsList} = require('./api')

router.get('/', pollsIndex)
router.post('/api/', pollsList)
router.get('/api/', pollsList)
router.get('/:pollId/', pollsDetail)

module.exports = router
