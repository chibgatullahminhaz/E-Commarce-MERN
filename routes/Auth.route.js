const express = require('express');
const routes = express.Router();

// // require controller 
const { registerController, loginController } = require('../controller/auth.controller');

//Register route || method
routes.post('/register',registerController )

//LOGIN route || method
routes.post('/login',loginController )


module.exports = routes;