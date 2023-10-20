const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const { clientesService } = require('../services');

const getClientByClientName = catchAsync(async (req, res) => {
  try {
    const cliente = await clientesService.getClientByClientName(req.params.name);
    res.status(httpStatus.OK).send(cliente);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('[Error] : ' + error);
  }
});


module.exports = {
  getClientByClientName,
};
