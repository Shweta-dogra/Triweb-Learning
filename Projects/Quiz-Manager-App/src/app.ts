
import express from 'express';
import userRoute from '../src/routes/user';
import mongoose from 'mongoose';
const app = express();
mongoose.set("strictQuery", false);

const connectionString = "mongodb+srv://shweta6933:Shwet@6933@mycluster.9dlcfc6.mongodb.net/workshopDB?retryWrites=true&w=majority"
app.use(express.json());
 //redirect /user to user routes
app.use('/user', userRoute);


main().catch((err)=>console.log(err));
async function main(){
    await mongoose.connect(connectionString);

    app.listen(3000, ()=>{
        console.log("Server Connected");
    });
}

