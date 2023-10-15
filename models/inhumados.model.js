const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const inhumados = sequelize.define(
  'inhumados',
  {
    cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inhumacion_traslado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    corr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_servicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jardin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo_jardin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false
    },
    letra_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fraccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    letra_2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    columna: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero_traslado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_traslado: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tipo_traslado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_defuncion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cuentra_anterior: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

module.exports = inhumados;
