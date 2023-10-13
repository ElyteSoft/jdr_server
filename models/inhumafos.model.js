const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const inhumados = sequelize.define(
  'inhumados',
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
    nombre_inhumado: {
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
    nombre_propietario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

inhumados.associate = (models) => {
  inhumados.belongsTo(models.Propietarios, {
    foreignKey: 'nombre_propietario', 
    onDelete: 'CASCADE',
  });
};


module.exports = inhumados;
