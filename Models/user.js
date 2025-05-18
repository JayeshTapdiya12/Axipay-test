const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
});

module.exports = User;
