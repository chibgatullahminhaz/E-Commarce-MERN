require('./config/db')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/user.routes'); 
const app = express();
// usesing 
app.use(cors())
// use morgam 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// routes
app.use( "/", routes);


// not found Router
app.use( (req, res)=>{
    res.status('404').send("Page not found");
  });

//   error server 
app.use((err,req,res)=>{
    res.status(500).send(err.message)
})


module.exports = app;