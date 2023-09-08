import express from 'express';
import {registerUser,  loginUser, isUserExist} from '../controllers/auth';
import {body} from 'express-validator';


const router = express.Router();

//post /user
router.post('/', [
    body('name')
    .trim().
    not().
    isEmpty().
    isLength({min:4})
    .withMessage("Please enter a valid name, with minimum 4 character long"),
    body('email').trim().isEmail()
    .custom((emailId: String)=>{
        return isUserExist(emailId)
        .then((status)=>{
            if(status){
                // const err = new ProjectError("User already exist");
                // err.statusCode = 422;
                // throw err;
                return Promise.reject("User already exist");
            }
            
        })
        .catch((err)=>{
            return Promise.reject(err);
        })
    })
    .normalizeEmail(),
    body('password').trim().isLength({min: 8})
    .withMessage("Enter atleast 8 character long password"),
    body('confirm_password').trim()
    .custom((value:String, {req})=>{
        if(value != req.body.password){
            return Promise.reject("password mismatch");
        }
        return true;
    })
], registerUser);

//login
router.post('/login', loginUser);


export default router;