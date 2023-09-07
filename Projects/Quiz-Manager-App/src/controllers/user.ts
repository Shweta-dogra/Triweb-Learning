import express from 'express';
import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import ProjectError from '../helper/projectError';

interface ReturnResponse{
    status : "success" | "error",
    message: String,
    data: [] | {}
}

const getUser = async(req:Request, res:Response, next:NextFunction)=>{
    let resp: ReturnResponse;
    console.log(req.userId);

    const userId = req.params.userId;
    if(req.userId != req.params.userId){
        const err = new ProjectError("You are not authorized");
        err.statusCode = 401;
        err.data = "Hi, it's error";
        throw err;
    }
    const user =await User.findById(userId);

    try {
       if(!user){
        // resp ={status: "error", message: "No user found", data: {}}
        // res.send(resp);
        const err = new ProjectError("No user exist");
        err.statusCode = 401;
        throw err;

       }else{
        resp ={status: "success", message: "User found", data: {user: user}};
        res.status(200).send(resp);
       } 
    } catch (error) {
        // resp ={status: "error",message: "Something went wrong", data: {}}
        // res.status(500).send(resp);    
        
        next(error);
    }
}

const updateUser = async(req:Request, res:Response, next:NextFunction)=>{
    let resp: ReturnResponse;
    try {
        if(req.userId != req.params.userId){
            const err = new ProjectError("You are not authorized");
            err.statusCode = 401
            throw err;
        }
        const userId = req.body._id;
        let user = await User.findById(userId); 
        if(!user){
            resp ={status: "error", message: "No user found", data: {}}
            res.send(resp);
           }else{
            user.name = req.body.name;
            await user.save();
            resp ={status: "error", message: "User updated", data: {user: user}};
            res.send(resp);
           } 
    } catch (error) {
        // resp ={status: "error",message: "Something went wrong", data: {}}
        // res.status(500).send(resp); 
        next(error);
    }
    
}


export  {getUser, updateUser};