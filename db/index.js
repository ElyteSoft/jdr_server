const { Sequelize } = require('sequelize');
require('dotenv').config();

const db_url = process.env.DATABASE_URL_DEV;
const db_name = process.env.DATABASE_NAME;
const db_user = process.env.DATABASE_USER;
const db_password = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_url,
  dialect: 'mssql' // stands for Microsoft SQL Server
});

module.exports = sequelize;
