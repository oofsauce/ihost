const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => console.log(`App listening on port ${port}.`))