const Payment = require('../Models/payment');
const validateLuhn = require('../Utlis/luhnValidator');
const maskCard = require('../Utlis/maskCard');

exports.addPayment = async (req, res) => {
    const { card_no, card_expiry, card_cvc, amount } = req.body;

    if (!validateLuhn(card_no)) {
        return res.status(400).json({ error: 'Invalid card number' });
    }

    try {
        const payment = await Payment.create({
            ...req.body,
            card_no: maskCard(card_no),
            card_cvc: '***', // mask CVV
            userId: req.params.user_id
        });

        res.status(201).json(payment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPayments = async (req, res) => {
    const payments = await Payment.findAll({ where: { userId: req.params.user_id } });
    res.json(payments);
};

