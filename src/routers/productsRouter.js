const express = require('express');

const router = express.Router();
const productController = require('../controllers');

router.get('/products', productController.getAll);
router.get('/products/:id', productController.getById);

module.exports = router;