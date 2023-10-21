const { inhumados } = require('../models');
const { Op } = require('sequelize');

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
  getInhumadoByInhumadoName,
};
