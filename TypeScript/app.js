const express = require('express');
const userRoutes = require('./routes/userRoute');

const app = express();

app.get('/', (req, res)=>{
    
    res.send("Hi, I am root of server");
});

app.use('/user', userRoutes);

app.listen(process.env.PORT);