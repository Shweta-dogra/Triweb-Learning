//  send /receive data to/from database in models 
import express from 'express';
import { Request, Response } from 'express';
import User from '../models/user';

interface ReturnResponse{
    status : "success" | "error",
    message: String,
    data: {}
}

const registerUser = async(req:Request, res:Response, next:express.NextFunction)=>{
    let resp: ReturnResponse;
    try {
        const user = new User();
        const result = await user.save();
        if(!result){
            resp ={ status: "error", message: "No result found", data: {} }
            res.send(resp);
        } else{
            resp ={ status: "success", message: "Registeration Done", data: {userID: result._id} }
            res.send(resp);
        }
    } catch (error) {
        resp ={status: "error", message: "Something went wrong", data: {}}
        res.status(500).send(resp);
    } 
}

const getUser = async(req:Request, res:Response)=>{
    let resp: ReturnResponse;
    const userId = req.params.userId;
    const user =await User.findById(userId);

    try {
       if(!user){
        resp ={status: "error", message: "No user found", data: {}}
        res.send(resp);
       }else{
        resp ={status: "error", message: "User found", data: {user: user}};
        res.send(resp);
       } 
    } catch (error) {
        resp ={status: "error",message: "Something went wrong", data: {}}
        res.status(500).send(resp);        
    }
}

const updateUser = async(req:Request, res:Response)=>{
    let resp: ReturnResponse;
    try {
        const userId = req.body._id;
        const user = await User.findById(userId);
        user.name = req.body.name;
        await user?.save();
        resp ={status: "error", message: "User updated", data: {user: user}};
        res.send(resp);

    } catch (error) {
        resp ={status: "error",message: "Something went wrong", data: {}}
        res.status(500).send(resp); 
    }
    
}
export  {registerUser, getUser, updateUser};