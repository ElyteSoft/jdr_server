const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Propietarios = sequelize.define(
  'Propietarios',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    numero_cuenta: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    nombre_propietario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jardin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fraccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);


module.exports = Propietarios;
