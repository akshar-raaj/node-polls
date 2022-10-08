const {Model, DataTypes} = require('sequelize')
const db = require('./../database')
console.log(db)
console.log(db.connection)

class Question extends Model {}

Question.init({
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  questionText: {type: DataTypes.STRING, allowNull: false},
  pubDate: {type: DataTypes.DATE, allowNull: false}
}, {
  sequelize: db.connection,
  tableName: 'polls_question'
})

module.exports = {Question: Question}
