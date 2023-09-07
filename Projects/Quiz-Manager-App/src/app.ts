import express from 'express';
import { Request, Response, NextFunction } from 'express';
import userRoute from './routes/user';
import authRoute from './routes/auth';
import quizRouter from './routes/quiz';
import mongoose from 'mongoose';
import ProjectError from './helper/projectError';

const app = express();

interface ReturnResponse{
    status : "success" | "error",
    message: String,
    data: {}
}

mongoose.set("strictQuery", false);

const connectionString = process.env.CONNECTION_STRING || "";
const port = process.env.PORT;
app.use(express.json());

declare global{
    namespace Express{
        interface Request{
            userId: String;
        }
    }
}
 //redirect /user to user routes
app.use('/user', userRoute);

 //redirect /auth to auth routes
 app.use('/auth', authRoute);

 app.use('/quiz', quizRouter);

 app.use ((err:ProjectError, req:Request, res:Response, next:NextFunction)=>{
    let message:String;
    let statusCode:number;

    if(!!err.statusCode && err.statusCode<500){
        message = err.message;
        statusCode = err.statusCode;
    } else{
        message = "Something went wrong . Please try again after some time";
        statusCode = 500;
    }

    let resp:ReturnResponse = {status: "error", message, data:{}};
    if(!!err.data){
        resp.data = err.data;
    }
    //logger for error
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
 });

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

