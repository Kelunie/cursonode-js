const express = require('express') // npm install express
const app = express()

const dittoJSON = require('./pokemon/ditto.json')

// para quitar el header de express
// app.disable('x-powered-by')

// forma con express
app.use(express.json())

// forma basica de definir un middleware
/* app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // solo llegan request que son POST y que tienen un header de content-type
  let body = ''

  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la informacion en el req.body
    req.body = data
    next()
  })
})
*/

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a mi página de inicio' })
})

app.get('/imagenDiosa.png', (req, res) => {
  res.sendFile(__dirname + '/reina.png', (err) => {
    if (err) {
      res.statusCode = 500 // Internal Server Error
      res.end('<h1>500 Internal Server error</h1>')
    }
  })
})

app.get('/pokemon/ditto', (req, res) => {
  res.status(200).json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  // req.body deberiamos guardar en la base de datos
  res.status(201).json(req.body)
})

// la ultima a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server Listening on port http://localhost:${PORT}/`)
})
