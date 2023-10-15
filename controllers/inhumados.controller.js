const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const { inhumadosService } = require('../services');

// Controller
const getAllInhumados = catchAsync(async (req, res) => {
  try {
    console.log('getAllInhumados');
    const inhumados = await inhumadosService.getInhumadoByInhumadoName();
    res.status(httpStatus.OK).send(inhumados);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('[Error] : ' + error);
  }
});

const getInhumadoByInhumadoName = catchAsync(async (req, res) => {
  try {
    const inhumado = await inhumadosService.getInhumadoByInhumadoName(req.params.name);
    res.status(httpStatus.OK).send(inhumado);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('[Error] : ' + error);
  }
});
  

module.exports = {
  getAllInhumados,
  getInhumadoByInhumadoName,
};
