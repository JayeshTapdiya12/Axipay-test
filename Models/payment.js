const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');
const User = require('./user');

const Payment = sequelize.define('Payment', {
    amount: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    description: DataTypes.STRING,
    card_no: DataTypes.STRING,
    card_expiry: DataTypes.STRING,
    card_cvc: DataTypes.STRING,
});

User.hasMany(Payment);
Payment.belongsTo(User);

module.exports = Payment;
