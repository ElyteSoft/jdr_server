const express = require('express');
const inhumadosRoute = require('./inhumados.route');
const clientesRoute = require('./clientes.route');

const router = express.Router();

router.use('/test', (req, res) => {
    res.status(200).send('Test route');
});

router.use('/inhumados', inhumadosRoute);
router.use('/clientes', clientesRoute);

module.exports = router;
