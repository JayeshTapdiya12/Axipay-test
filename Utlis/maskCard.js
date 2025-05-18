module.exports = function maskCard(cardNumber) {
    return cardNumber.slice(0, 4) + '********' + cardNumber.slice(-4);
};
