const express = require('express')
const polls = require('./polls/routes')
const app = express()
const port = 3000

const homeHandler = function (req, res) {
  res.send('Hello World')
}

app.get('/', homeHandler)
app.use('/polls', polls)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
