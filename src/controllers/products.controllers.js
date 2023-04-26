const productService = require('../services/products.services');

const getAll = async (_request, response) => {
  const allProducts = await productService.getAll();
  return response.status(200).json(allProducts);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const idProduct = await productService.getById(id);
  if (!idProduct) {
    return response.status(404).json({ message: 'Product not found' });
  }
  return response.status(200).json(idProduct);
};

module.exports = {
  getAll,
  getById,
};
