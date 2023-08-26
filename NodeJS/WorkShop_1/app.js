const express = require('express');

const app = express();

const calculatorRoute = require('./routers/calculator');


app.use(express.json());

app.get('/', (req, res)=>{
    // console.log(req);
    res.send("I am response");
});


// app.get('/add', (req, res)=>{
//     let n1 =3;
//     let n2 =4;
//     let sum = n1+n2;
//     res.send(`sum = ${sum}`);
// });

app.use('/calculator', calculatorRoute);

app.listen(3000);
