const express = require('express');

const router = express.Router();
const salesController = require('../controllers/sales.controllers');
const { validationProduct, validationQuantity } = require('../middlewares/salesValidations');

router.post('/sales', validationProduct, validationQuantity, salesController.createSales);

module.exports = router;
