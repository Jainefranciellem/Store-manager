const express = require('express');

const router = express.Router();
const productController = require('../controllers/products.controllers');
const { validationName } = require('../middlewares/productValidations');

router.get('/', productController.getAll);
router.get('/search', productController.searchProduct);
router.get('/:id', productController.getById);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', validationName, productController.updateProduct);
router.post('/', validationName, productController.create);

module.exports = router;
