const express = require('express')
const polls = require('./polls/routes')
const {homeHandler} = require('./handlers')
const app = express()
const port = 3000

app.get('/', homeHandler)
app.use('/polls', polls)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
