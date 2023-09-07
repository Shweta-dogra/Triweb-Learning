import { Request, Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import ProjectError from '../helper/projectError';

const isAuthenticated = (req: Request, res:Response, next:NextFunction)=>{

   try {
             //header --> token
        const authHeader = req.get('Authorization');
        if(!authHeader){
            let err = new ProjectError("Not Authenticated");
            err.statusCode = 401;
            throw err;
            // res.status(401).send("Not Authenticated");  
        }
        const token = authHeader.split(' ')[1];
        //jwt --> decode using sign
        let decodedToken:{userId: String, iat:Number, exp:Number};
        try {
            decodedToken = <any>jwt.verify(token, 'secretKey');
        } catch (error) {
            console.log(error);
            let err = new ProjectError("Not Authenticated");
            err.statusCode = 401;
            throw err;
        }
        if(!decodedToken){
            let err = new ProjectError("Not Authenticated");
            err.statusCode = 401;
            throw err;  
        }
        //get userID
        req.userId = decodedToken.userId;
        console.log(decodedToken);

        next();
   } catch (error) {
    next(error);
   }
    
}

export {isAuthenticated}