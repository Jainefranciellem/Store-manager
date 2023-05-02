const productModel = require('../models/products.model');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

const getById = async (id) => {
  const productId = await productModel.getById(id);
  if (!productId) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, message: productId };
};

const create = async (product) => {
  const createdProduct = await productModel.create(product);
  return { type: null, message: createdProduct };
};

const updateProduct = async (id, name) => {
  const update = await productModel.updateProduct(id, name);
  if (update === 0) {
    return { type: 404, message: 'Product not found' };
  }

  return { type: null, message: { id, name } };
};

const deleteProduct = async (id) => {
  const productId = await productModel.getById(id);
   if (!productId) {
     return { type: 404, message: 'Product not found' };
   }
  await productModel.deleteProduct(id);
  return { type: null, message: productId };
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteProduct,
};
