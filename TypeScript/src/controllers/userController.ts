import { Request, Response } from 'express';

import {addUserToDB} from '../models/userModel';

const registerUser =  (req:Request, res:Response)=>{

    const userName = "Shweta";
    const password = "abcd";
    const result = addUserToDB(userName, password);
    res.send(result);
}

export {registerUser};