"use strict"
const {Model, DataTypes} = require('sequelize')
const db = require('./../database')

class Question extends Model {}

Question.init({
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  questionText: {type: DataTypes.STRING, allowNull: false},
  pubDate: {type: DataTypes.DATE, allowNull: false}
}, {
  sequelize: db.connection,
  tableName: 'polls_question'
})


class Choice extends Model {}

Choice.init({
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  choiceText: {type: DataTypes.STRING, allowNull: false},
  votes: {type: DataTypes.INTEGER, allowNull: false}
}, {
  sequelize: db.connection,
  tableName: 'polls_choice'
})

Question.hasMany(Choice, {foreignKey: 'questionId'})
Choice.belongsTo(Question, {foreignKey: {name: 'questionId', allowNull: false}})

module.exports = {Question: Question, Choice: Choice}
