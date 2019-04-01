const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const course = require('./routes/api/course');

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

//passport middleware 
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);


const port = 3001; 

//use routes 
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/course', course);

app.listen(port, () => console.log(`server is running on port ${port}`));