const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  logging: false,
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection successful');
  } catch (error) {
    throw error;
  }
}

async function syncModels() {
  try {
    await sequelize.sync({ alter: true });
    console.log(`All models synchronized`);
  } catch (error) {
    throw error;
  }
}

module.exports = { sequelize, checkConnection, syncModels };
