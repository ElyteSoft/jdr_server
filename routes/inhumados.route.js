const express = require('express');
const router = express.Router();

// Import your controller functions
const { inhumadosController } = require('../controllers');

// Define your routes
router.get('/:name', inhumadosController.getInhumadoByInhumadoName);

module.exports = router;
