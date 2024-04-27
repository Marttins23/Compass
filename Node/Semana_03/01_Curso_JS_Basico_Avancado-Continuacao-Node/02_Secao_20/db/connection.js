const sequelizeClass = require('sequelize');
const sequelize = new sequelizeClass({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize;