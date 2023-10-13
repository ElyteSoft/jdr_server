const express = require('express');
const router = express.Router();

// Import your controller functions
const { inhumadosController } = require('../controllers');

// Define your routes
router.get('/', inhumadosController.getAllInhumados);

module.exports = router;
