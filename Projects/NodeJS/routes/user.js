const express = require('express');
// const userController = require('../controllers/user');

const {register, get, update, deleteUser} = require('../controllers/user');
const router = express.Router();

router.post('/register', register);

router.post('/get', get);

router.post('/update', update);

router.post('/delete', deleteUser);

module.exports = router;