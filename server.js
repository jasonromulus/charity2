//Stuff to start this
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const moment = require('helper-moment');



//Handlebars stuff
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs', helpers: {moment: moment}}));
app.set('view engine', 'hbs');

//Middleware stuff
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

//Note to self don't need app.use if you write the code like this it can call it from this style
require('./controllers/charities')(app);
require('./controllers/donations')(app);

//Port Listen
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Listening on port 3000!')
  const db = process.env.MONGODB_URI || 'mongodb://localhost/charity-tracker2';
  mongoose.connect(db)
})

module.exports = app