const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
app.use(cors());

//routing
const index = require('./routes/index');
const todo = require('./routes/todo');

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/todo', todo);

app.listen(3000,()=>{
    console.log("Yup its run on port 3000");
});