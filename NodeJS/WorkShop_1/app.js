const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    // console.log(req);
    res.send("I am response");
});

app.get('/add', (req, res)=>{
    let n1 =3;
    let n2 =4;
    let sum = n1+n2;
    res.send(`sum = ${sum}`);
});

app.post('/add', (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;

    let sum =n1+n2;
    res.send(`sum = ${sum}`);
});

app.post('/sub', (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;

    let diff = n1-n2;

    res.send(`Difference = ${diff}`);
});

app.post('/multiply', (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;

    let mul = n1*n2;

    res.send(`Product = ${mul}`);
});

app.post('/divide', (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;

    let div = n1/n2;

    res.send(`Divide = ${div}`);
});

app.post('/quotient', (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;

    let quotient = n1%n2;

    res.send(`Quotient = ${quotient}`);
});

app.listen(3000);
