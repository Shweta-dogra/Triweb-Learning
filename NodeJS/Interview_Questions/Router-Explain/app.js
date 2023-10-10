 //Entry point
 const userRoutes = require('./routers/user');
 const express = require('express');

 const app = express();

 //middleware
 app.use((req, res, next)=>{
    console.log("I am here");
    next();
 })

 // user routers
 app.use('/user', userRoutes);

 //product routers

 app.listen(3000);