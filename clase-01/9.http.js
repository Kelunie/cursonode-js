const http = require('node:http') // prtocolo http
const { findAvailablePort } = require('./10.free-port.js') // modulo de node:clase-01\10.free-port.js

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server Listening on port http://localhost:${port}/`)
  })
})
