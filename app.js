// app.js
const http = require('http');
const db = require('./db');
const config = require('./config');

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello AMEN Server!')
  }
  
const app = http.createServer(requestHandler)

  
app.listen(config.app.port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${config.app.port}`)
  })
  