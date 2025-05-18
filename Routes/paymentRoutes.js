const express = require('express');
const router = express.Router();
const paymentController = require('../Controller/paymentController');
// import * as paymentController from '../Controller/paymentController'

router.post('/users/:user_id/payments', paymentController.addPayment);
router.get('/users/:user_id/payments', paymentController.getPayments);

module.exports = router;
