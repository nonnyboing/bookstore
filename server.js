const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./Db/Db');
//const Book = require('./models/books');
const port = 5000;
const router = require('./routes/routes');
const userRouter = require('./routes/user');

const app = express();
/*
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}); */

app.use(bodyParser.json());


mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(()=> console.log('Database Connected'))
    .catch(err => console.log('Connection failed' + err));


app.use('/books', router);
app.use('/auth', userRouter);


app.listen(port, ()=> {console.log(`Server running on port ${port}`)});