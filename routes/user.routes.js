const express = require('express');
const routes = express.Router();

// create home route
routes.get("/", (req,res)=>{
res.status(200).send('<h1> This is home Page <h1/>')
})
routes.get("/home", (req,res)=>{
    res.status(200).send('<h1> This is home Page <h1/>')
    })

routes.get("/user", (req,res)=>{
        res.status(200).send('<h1> This is user Page <h1/>')
        })


module.exports = routes;