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

app.get('/product', async(req, res)=>{
    try {
        console.log("products fetching");
        const products = await ProductModel.find({});
        
        res.send({status: "success", message: products});
    } catch (error) {
        console.log(error);
        res.send({status: "error", message: error.message});
    }
   
})


// async function startServer(){
//     try {
//         await mongoose.connect(connectionString);
        
//         app.listen(process.env.PORT, ()=>{
//             console.log("Server Connected");
//         }); 
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// startServer();
mongoose.connect(connectionString).then(() => {
    app.listen(process.env.PORT);
    console.log("Server connected");
  });