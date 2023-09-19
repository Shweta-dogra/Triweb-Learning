import express from 'express';
import { Request, Response , NextFunction} from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ProjectError from '../helper/projectError';
import {validationResult} from 'express-validator';

interface ReturnResponse{
    status : "success" | "error",
    message: String,
    data: [] | {}
}


const registerUser = async(req:Request, res:Response, next:NextFunction)=>{
    let resp: ReturnResponse;
    try {

        //validation
        const validationErr = validationResult(req);
        if(!validationErr.isEmpty()){
            const err = new ProjectError("Validation Failed");
            err.statusCode = 422;
            err.data = validationErr.array();
            throw err;
        }

        //validation-end
        const email = req.body.email;
        const name = req.body.name;
        const password = await bcrypt.hash(req.body.password, 12) ;

        // let buff = new Buffer(passwordFromReq);
        // let password = buff.toString('base64');

        const user = new User({email, name, password});
        const result = await user.save();
        if(!result){
            resp ={ status: "error", message: "No result found", data: {} }
            res.send(resp);
        } else{
            resp ={ status: "success", message: "Registeration Done", data: {userId: result._id} }
            res.send(resp);
        }
    } catch (error) {
        // resp ={status: "error", message: "Something went wrong", data: {}}
        // res.status(500).send(resp);
        next(error);
    } 
}

const loginUser = async(req:Request, res:Response, next:NextFunction)=>{
    let resp: ReturnResponse;
    
    try {
        const email= req.body.email;
        const password = req.body.password;
       //find user with email
        const user = await User.findOne({email});
        if(!user){
            const err = new ProjectError("No user exist");
            err.statusCode = 401;
            throw err;
            // resp ={status: "error", message: "No user exist", data: {}}
            // res.status(401).send(resp);
        }else{
            //verify password of the user using bcrypt 
            const status = await bcrypt.compare(password, user.password);
            //decide
            if(status){
                const token = jwt.sign({userId: user._id}, "secretKey", {expiresIn: '2h'})
                resp ={status: "success",message: "Login Successful", data: {token:token}}
                res.send(resp); 
            } else{
                // resp ={status: "error",message: "Credentials mismatch, not login", data: {}}
                // res.status(401).send(resp);
                const err = new ProjectError("Credentials mismatch, not login");
            err.statusCode = 401;
            throw err;
            }
             
        }
        
    } catch (error) {
        // resp ={status: "error",message: "Something went wrong", data: {}}
        // res.status(500).send(resp); 
        next(error);
    }
}

const isUserExist = async(email:String) => {
       //find user with email
        const user = await User.findOne({email});
        if(!user){
           return false;
        }
        return true;
    
}

export{registerUser, loginUser, isUserExist}