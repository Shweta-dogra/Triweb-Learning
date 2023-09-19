// import express from 'express';
// import { Request, Response, NextFunction } from 'express';
// import User from '../models/user';
// import ProjectError from '../helper/projectError';

// interface ReturnResponse{
//     status : "success" | "error",
//     message: String,
//     data: [] | {}
// }

// const getUser = async(req:Request, res:Response, next:NextFunction)=>{
//     let resp: ReturnResponse;
//     console.log(req.userId);

//     const userId = req.params.userId;
//  //===================================
//     if(req.userId != req.params.userId){
//         const err = new ProjectError("You are not authorized");
//         err.statusCode = 401;
//         err.data = "Hi, it's error";
//         throw err;
//     }
//  //===================================
//     const user =await User.findById(userId);

//     try {
//        if(!user){
//         // resp ={status: "error", message: "No user found", data: {}}
//         // res.send(resp);
//         const err = new ProjectError("No user exist");
//         err.statusCode = 401;
//         throw err;

//        }else{
//         resp ={status: "success", message: "User found", data: {user: user}};
//         res.status(200).send(resp);
//        } 
//     } catch (error) {
//         // resp ={status: "error",message: "Something went wrong", data: {}}
//         // res.status(500).send(resp);    
        
//         next(error);
//     }
// }

// const updateUser = async(req:Request, res:Response, next:NextFunction)=>{
//     let resp: ReturnResponse;
//     try {
//         if(req.userId != req.params.userId){
//             const err = new ProjectError("You are not authorized");
//             err.statusCode = 401
//             throw err;
//         }
//         const userId = req.body._id;
//         let user = await User.findById(userId); 
//         if(!user){
//             resp ={status: "error", message: "No user found", data: {}}
//             res.send(resp);
//            }else{
//             user.name = req.body.name;
//             await user.save();
//             resp ={status: "error", message: "User updated", data: {user: user}};
//             res.send(resp);
//            } 
//     } catch (error) {
//         // resp ={status: "error",message: "Something went wrong", data: {}}
//         // res.status(500).send(resp); 
//         next(error);
//     }
    
// }


// export  {getUser, updateUser};

import { Response, Request, NextFunction } from "express";

import User from "../models/user";
import projectError from "../helper/projectError";

interface ReturnResponse{
    status : "success" | "error",
    message: String,
    data: [] | {}
}

// get-->> get user data
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  // console.log("query", req.query);
  // console.log("params", req.params);
  // console.log("params", req.params.userId);
  let resp: ReturnResponse;
  try {
    const userId = req.params.userId;
    //==================
    if (req.userId != req.params.userId) {
      const err = new projectError("You are not authorized");
      err.statusCode = 401;
      err.data = { hi: "It'sError " };
      throw err;
    }
    //============
    const user = await User.findById(userId, { name: 1, email: 1 });
    if (!user) {
      const err = new projectError("No user exist");
      err.statusCode = 401;
      throw err;
    } else {
      resp = { status: "success", message: "User found", data: user };
      res.status(200).send(resp);
    }
  } catch (err) {
    next(err);
  }
};

//put-->> update user data
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;
  try {
    if (req.userId != req.body.id) {
      const err = new projectError("You are not authorized");
      err.statusCode = 401;
      throw err;
    }
    const userId = req.body.id;
    const user = await User.findById(userId);
    if (!user) {
      const err = new projectError("No user exist");
      err.statusCode = 401;
      throw err;
    }
    user.name = req.body.name;
    await user.save();
    resp = { status: "success", message: "User Updated", data: {} };
    res.send(resp);
  } catch (err) {
    next(err);
  }
};

export { getUser, updateUser };