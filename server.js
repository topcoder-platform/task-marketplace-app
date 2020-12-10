/* global process */
const express = require('express')
const fs = require('fs')
const https = require('https')

const app = express()

app.use(
  '/tasks',
  express.static('./dist', {
    setHeaders: function setHeaders(res) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      )
    }
  })
)

app.get('/', function (req, res) {
  res.send('alive')
})

const PORT = process.env.PORT || 8502
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
  .listen(PORT, function () {
    console.log(`App is hosted on port ${PORT}.`) // eslint-disable-line no-console
  })
