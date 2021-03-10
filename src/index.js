const express = require('express')
const app = express()
var morgan = require('morgan')
var exphbs  = require('express-handlebars');
var path = require('path');
const port = 3000;

//route
const route = require('./routes');

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

//route init
route(app);

//start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})