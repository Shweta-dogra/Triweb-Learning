//chrome: inspect
//debug nodejs

const express = require('express');
const app = express();

function getData(){
    const obj = {}

    obj["name"] = "code by heart";
    obj["subject"] = "NodeJS";

    return obj;
}

app.get('/', (req, res)=>{
    let x =3;
    let y = x+2;
    let z = y+x;
    let information = getData();
    res.send({status: "success" , data:{x, y, z, information}});
});

app.listen(3000);