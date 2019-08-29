const Sequelize = require('sequelize');

const sequelize = new Sequelize('my_portfolio', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost'
  });
  module.exports = sequelize;