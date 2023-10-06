const express = require('express');
const router = express.Router();

// Import your controller functions
const userController = require('./controllers/userController');
const inhumadosController = require('./controllers/inhumadosController');

// Define your routes
router.get('/inhumados', inhumadosController.getInhumados);

module.exports = router;
