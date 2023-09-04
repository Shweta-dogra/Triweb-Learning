// redirect requests to particular methods of controller
import express from 'express';

import {registerUser, getUser, updateUser} from '../controllers/user';
const router = express.Router();

//post /user
router.post('/', registerUser);


//get/user/:userId
router.get('/:userId', getUser);

//put
router.put('/', updateUser);


export default router;

