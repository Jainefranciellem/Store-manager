const express = require('express');

const router = express.Router();
const productController = require('../controllers');
const { validationName } = require('../middlewares/productValidations');

router.get('/products', productController.getAll);
router.get('/products/:id', productController.getById);
router.post('/products', validationName, productController.create);

module.exports = router;
