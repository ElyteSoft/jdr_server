const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const clientes = sequelize.define(
  'clientes',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cripta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    osario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jardin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_jardin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    letra_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    faccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    letra_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    columna: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = clientes;
