"use strict"
const homeHandler = function (req, res) {
  res.send('Hello World')
}

module.exports = {homeHandler: homeHandler}
