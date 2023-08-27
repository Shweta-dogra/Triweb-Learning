const express = require('express');

const userRoute = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/user', userRoute);

app.get('/', (req, res)=>{
    res.send("I am working");
});



app.listen(3000);