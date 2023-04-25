const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const shapes = require('./shapes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Handlebars Middleware
app.engine('handlebars', exphbs.engine( { defaultLayout: 'main'} ));
app.set('view engine', 'handlebars');

// redirecting via get
app.get('/', (req, res) => {
    res.render('index', {
        title: "Shapes App",
        shapes
    });
})

//Setting a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/shapes', require('./routes/api/shapes'))

//Init middleware
// app.use(logger);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {console.log(`Server Started on port: ${PORT}`)});

