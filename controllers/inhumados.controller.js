const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const { inhumadosService } = require('../services');

// Controller
const getAllInhumados = catchAsync(async (req, res) => {
  try {
    const inhumados = await inhumadosService.getAllInhumados();
    res.status(httpStatus.OK).send(inhumados);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('[Error] : ' + error);
  }
});

module.exports = {
    getAllInhumados,
};
