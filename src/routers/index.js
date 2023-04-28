const express = require('express');

const router = express.Router();
const productRouter = require('./productsRouter');
const salesRouter = require('./salesRouter');

router.use(productRouter);
router.use(salesRouter);

module.exports = router;
