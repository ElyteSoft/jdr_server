const { clientes } = require('../models');
const { Op } = require('sequelize');

const getClientByClientName = async (name) => {
  try {
    const searchStrings = name.split(' ');

    const conditions = searchStrings.map(str => ({
      nombre: { [Op.like]: `%${str}%` }
    }));

    const cliente = await clientes.findAll({
      where: {
        [Op.and]: conditions
      }
    });
    return cliente;
  } catch (error) {
    return '[Error] : ' + error;
  }
}

module.exports = {
  getClientByClientName,
};

