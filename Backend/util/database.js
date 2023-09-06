const Sequelize = require('sequelize');

const sequelize =  new Sequelize('project','root','maazdanish',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;