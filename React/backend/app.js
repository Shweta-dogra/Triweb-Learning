const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ProductModel = require('./model/product');

mongoose.set("strictQuery", false);
const connectionString = process.env.CONNECTION_STRING || "";

app.use(cors());

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("It is running");
});

app.post('/product', async(req, res)=>{
    try {
        const result = await ProductModel.create(req.body);
        console.log(result);
        res.send({status: "success", message: result});
    } catch (error) {
        console.log(error);
        res.send({status: "error", message: error.message});
    }
   
})

// mongoose.connect(process.env.CONNECTION_STRING, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     app.listen(process.env.PORT);
// })


async function startServer(){
    try {
        // console.log("Connecting...", connectionString);
        await mongoose.connect(connectionString);
        
        app.listen(process.env.PORT, ()=>{
            console.log("Server Connected");
        }); 
    } catch (error) {
        console.log(error);
        
    }
    
}
startServer();