const salesModel = require('../models/sales.model');
const salesProductModel = require('../models/salesProduct.model');

const createSales = async (salesArray) => {
  const date = new Date();

  const salesId = await salesModel.createSale(date);

  const array = await Promise.all(salesArray.map(({ productId, quantity }) =>
    salesProductModel.createProductSale(productId, salesId, quantity)));

  const productUndefined = array.some((element) => element === undefined);

  if (productUndefined) {
    return { type: null, message: salesId };
  }
  return { type: 404, message: 'Product not found' };
};

module.exports = {
  createSales,
};
