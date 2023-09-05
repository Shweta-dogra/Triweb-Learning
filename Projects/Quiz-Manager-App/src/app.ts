
import express from 'express';
import userRoute from '../src/routes/user';
import mongoose from 'mongoose';
const app = express();
mongoose.set("strictQuery", false);

const connectionString = process.env.CONNECTION_STRING || "";
const port = process.env.PORT;
app.use(express.json());
 //redirect /user to user routes
app.use('/user', userRoute);



async function startServer(){
    try {
        // console.log("Connecting...", connectionString);
        await mongoose.connect(connectionString);
        
        app.listen(port, ()=>{
            console.log("Server Connected");
        }); 
    } catch (error) {
        console.log(error);
    }
    
}
startServer();

