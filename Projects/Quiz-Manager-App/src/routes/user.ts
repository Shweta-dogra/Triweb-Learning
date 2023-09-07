// redirect requests to particular methods of controller
import express from 'express';

import {getUser, updateUser} from '../controllers/user';
import { isAuthenticated } from '../middlewares/isAuth';

const router = express.Router();

//user should be authenticated 
//user should be authorize
//get/user/:userId
router.get('/:userId', isAuthenticated, getUser);

//put
router.put('/', isAuthenticated, updateUser);


export default router;

