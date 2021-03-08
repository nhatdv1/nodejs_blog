const express = require('express')
const app = express()
var morgan = require('morgan')
var exphbs  = require('express-handlebars');
var path = require('path');
const port = 3000

//express static path
app.use(express.static(path.join(__dirname, 'public')))


//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs({
  "extname":".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

//start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})