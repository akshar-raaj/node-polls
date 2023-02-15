"use strict"
const dotenv = require('dotenv')
const environment = process.env.ENVIRONMENT || 'local'

const bunyan = require('bunyan')
const logger = bunyan.createLogger({'name': 'constants'})

if (environment === 'production') {
  logger.info('Using prod environment')
  dotenv.config({path: '.env.prod'})
}
else if (environment === 'docker') {
  logger.info('Using docker environment')
  dotenv.config({path: '.env.docker'})
}
else {
  logger.info('Using dev/local environment')
  dotenv.config()
}

const DATABASE = {
  NAME: process.env.DATABASE_NAME,
  USER: process.env.DATABASE_USER,
  PASSWORD: process.env.DATABASE_PASSWORD,
  HOST: process.env.DATABASE_HOST,
  PORT: process.env.DATABASE_PORT
}

const SERVER = {
  PORT: process.env.SERVER_PORT || '3000'
}

module.exports = {'DATABASE': DATABASE, 'SERVER': SERVER}
