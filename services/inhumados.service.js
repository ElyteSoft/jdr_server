const { inhumados, Propietarios } = require('../models');
const httpStatus = require('http-status');
const { Op } = require('sequelize');

const getAllInhumados = async (req, res) => {
  try {
    await inhumados.findAll({ limit: 2 }).then((response) => {
      console.log(response);
      return response;
    });
  } catch (error) {
      return '[Error] : ' + error;  
  }
}

const getInhumadoByInhumadoName = async (name) => {
  try {
    const searchStrings = name.split(' ');

    const conditions = searchStrings.map(str => ({
      nombre: { [Op.like]: `%${str}%` }
    }));

    const inhumado = await inhumados.findAll({
      where: {
        [Op.and]: conditions
      }
    });
    return inhumado;
  } catch (error) {
    return '[Error] : ' + error;  
  }
}

module.exports = {
  getAllInhumados,
  getInhumadoByInhumadoName,
};
