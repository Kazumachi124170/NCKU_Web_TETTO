const express = require('express')
const app = express()
const port = 65530

const http = require('http').createServer(app)


http.listen(port, () => {
  console.log(`Server start on port: ${port}`)
})


app.use(express.static(`${__dirname}/public`))


