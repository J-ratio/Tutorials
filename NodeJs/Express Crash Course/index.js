const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//redirecting via get
// app.get('/', (req, res) => {
//     console.log(__dirname);
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })


//Setting a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/shapes', require('./routes/api/shapes'))

//Init middleware
// app.use(logger);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {console.log(`Server Started on port: ${PORT}`)});

