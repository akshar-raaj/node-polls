"use strict"
const app = require('./app')

const {SERVER} = require('./constants')
const port = SERVER.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
