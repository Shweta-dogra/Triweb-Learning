
const express = require('express');

const calculatorCOntroller = require('../Controller/calculator');

const router = express.Router();

//-----/calculator/add------
router.post('/add', calculatorCOntroller.add);

router.post('/subtract', calculatorCOntroller.subtract);

router.post('/multiply', calculatorCOntroller.multiply);

router.post('/divide', calculatorCOntroller.divide);

router.post('/quotient', calculatorCOntroller.quotient);

module.exports = router;