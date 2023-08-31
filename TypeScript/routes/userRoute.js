const express = require('express');
const userCOntroller = require('../controllers/userController');

const {registerUser} = require('../controllers/userController')
const router = express.Router();

router.post('/register',registerUser);

module.exports = router;