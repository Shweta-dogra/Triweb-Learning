import express from 'express';
import { Request, Response } from 'express';
import userRoutes from './src/routes/userRoute';

const app = express();

// app.get('/', (req:Request, res:Response)=>{
    
//     res.send("Hi, I am root of server");
// });

app.use('/user', userRoutes);

app.listen(process.env.PORT);