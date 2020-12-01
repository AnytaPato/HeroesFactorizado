const express = require('express');
const router = express.Router();


const creditos = require('../controllers/creditosControllers');

router.get('/', creditos.creditos);

module.exports = router;