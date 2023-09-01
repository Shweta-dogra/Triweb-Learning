import { Request, Response } from 'express';

import {addUserToDB, updateUserData} from '../models/userModel';

const registerUser =  (req:Request, res:Response)=>{
  
    const userName:string = "Shweta";
    const password:string = "abcd";
    const age = 25;
    const result = addUserToDB(userName, password, age);
    res.send(result);
}



const checkTypesAndInterface = (req:Request, res:Response)=>{

    interface Point{
        readonly x: number,
        readonly y: number
    }

    let num:Point={x:1, y:4}
    // num.x =4; //Cannot assign to 'x' because it is a read-only property.

    //union & self define type
    //type status = true | false
    type lockedState = "locked" | "unlocked";
    let xstate: lockedState = "locked";

    const myUser = {
            id: 1,
            uname: "ahsas",
            password:"123wer",
            age:32,
            isActive: true,
            accountStatus: "locked"
    }
    const result = updateUserData(myUser);
    res.send(result); 
}

export {registerUser, checkTypesAndInterface};