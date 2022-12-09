"use strict"
const {DATABASE} = require('./constants')
const {Sequelize} = require('sequelize')

const bunyan = require('bunyan')
const log = bunyan.createLogger({'name': 'database'})

const databaseName = DATABASE.NAME
const user = DATABASE.USER
const password = DATABASE.PASSWORD
const host = DATABASE.HOST


const getConnection = () => {
  const sequelize = new Sequelize(databaseName, user, password, {
    host: host,
    dialect: 'mysql'
  })
  try {
    sequelize.authenticate();
    log.info('Connection has been established successfully.');
  } catch (error) {
    log.error('Unable to connect to the database:', error);
  }
  return sequelize
}

const connection = getConnection()

module.exports = {'connection': connection}
