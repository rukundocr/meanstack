//mongodb pwd:N0HtpmtxjnR2vYE8
//mongobd connection:mongodb+srv://rukundo:<PASSWORD>@cluster0-bg7kr.mongodb.net/test?retryWrites=true
const express = require('express');
const bodyperser = require('body-parser');
const mongoose= require('mongoose');
const Thing = require('./models/thing');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');
const app =  express();
// import morgan package
const morgan = require('morgan');


//mongoose.connect('mongodb+srv://rukundo:N0HtpmtxjnR2vYE8@cluster0-bg7kr.mongodb.net/test?retryWrites=true')
mongoose.connect('mongodb://localhost:27017/stuffdb',{useNewUrlParser: true} )
.then(() => {
    console.log('Successfully connected to MongoDB Atlas(rukundo jean claude account)!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content,Accept,Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
  next();
     });
     //use  morgan 
app.use(morgan('dev'));
app.use(bodyperser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);  
module.exports= app;