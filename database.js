const {DATABASE} = require('./constants')
const {Sequelize} = require('sequelize')

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
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  return sequelize
}

const connection = getConnection()

module.exports = {'connection': connection}
