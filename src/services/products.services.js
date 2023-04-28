const productModel = require('../models/products.model');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

const getById = async (id) => {
  const productId = await productModel.getById(id);
  if (!productId) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null, message: productId };
};

const create = async (product) => {
  const createdProduct = await productModel.create(product);
  return { type: null, message: createdProduct };
};

module.exports = {
  getAll,
  getById,
  create,
};
