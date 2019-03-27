const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

//initialize a variable to express 
const app = express();

//body parser middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db configuration
const db = require('./config/keys').mongoURI; 

//conect to mongodb through mongoose
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Mantis plagairism detection system'));

const port = 3000; 

//use routes 
app.use('/api/users', users);

app.listen(port, () => console.log(`server is running on port ${port}`));