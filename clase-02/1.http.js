const http = require('node:http') // prtocolo http
const fs = require('node:fs') // modulo para manejar archivos

/*
  errores de http:
  100 - 199 - Información
  200 - 299 - Ok
  300 - 399 - Redirección
  400 - 499 - Error del cliente
  500 - 599 - Error del servidor
*/

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagenDiosa.png') {
    fs.readFile('./reina.png', (err, data) => {
      if (err) {
        res.statusCode = 500 // Internal Server Error
        res.end('<h1>500 Internal Server error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Página de contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)
server.listen(desiredPort, () => {
  console.log(`Server Listening on port http://localhost:${desiredPort}/`)
})
