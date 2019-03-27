const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');

const app = express(); 

const db = require('./config/keys').mongoURI; 

mongoose
    .connect(db)
    .then( () => console.log("mongoDB Connected"))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('i love pizza'));

const port = 3000; 

app.use('/api/users', users);

app.listen(port, () => console.log(`server is running on port ${port}`));