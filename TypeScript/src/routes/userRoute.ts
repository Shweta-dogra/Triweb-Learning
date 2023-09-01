import express from 'express';
// import userController from '../controllers/userController';

import {registerUser, checkTypesAndInterface} from '../controllers/userController';
const router = express.Router();

router.post('/register',registerUser);
router.post('/update',checkTypesAndInterface);

export default router;