const { inhumados, Propietarios } = require('../models');
const httpStatus = require('http-status');

const fakeInhumados = [
  {
    id: "789",
    numero_cuenta: "123",
    nombre_inhumado: "Jane Doe",
    jardin: "Garden 2",
    sector: "Sector B",
    fraccion: "Fraction 2",
    nombre_propietario: "Raul"
  },
  {
    id: "123",
    numero_cuenta: "456",
    nombre_inhumado: "John Doe",
    jardin: "Garden 1",
    sector: "Sector A",
    fraccion: "Fraction 1",
    nombre_propietario: "Jessica"
  }
]

const getAllInhumados = async (req, res) => {
  try {
    // await inhumados.findAll().then((inhumados) => {
    //   return inhumados
    // });
    return fakeInhumados;
  } catch (error) {
      return '[Error] : ' + error;  
  }
}

module.exports = {
  getAllInhumados,
};
