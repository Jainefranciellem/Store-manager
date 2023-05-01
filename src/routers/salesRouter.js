const express = require('express');

const router = express.Router();
const salesController = require('../controllers/sales.controllers');
const { validationProduct, validationQuantity } = require('../middlewares/salesValidations');

router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
router.post('/', validationProduct, validationQuantity, salesController.createSales);

module.exports = router;
