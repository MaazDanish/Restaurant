const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Bill = sequelize.define('bill', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dishes: Sequelize.STRING,
    price: Sequelize.INTEGER,
    table: Sequelize.INTEGER
});

module.exports = Bill;