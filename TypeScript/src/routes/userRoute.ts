import express from 'express';
// import userController from '../controllers/userController';

import {registerUser} from '../controllers/userController';
const router = express.Router();

router.post('/register',registerUser);

export default router;