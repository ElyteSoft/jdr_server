const express = require('express');
const router = express.Router();

// Import your controller functions
const { clientesController } = require('../controllers');

// Define your routes
router.get('/:name', clientesController.getClientByClientName);

module.exports = router;
