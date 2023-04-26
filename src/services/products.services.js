const productModel = require('../models/products.model');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

const getById = async (id) => {
  const productId = await productModel.getById(id);
  return productId;
};

module.exports = {
  getAll,
  getById,
};
