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
    userId: DataTypes.INTEGER,
});


User.hasMany(Payment, { foreignKey: 'userId' });
Payment.belongsTo(User, { foreignKey: 'userId' });

module.exports = Payment;
