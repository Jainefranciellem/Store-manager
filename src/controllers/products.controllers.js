const productService = require('../services/products.services');

const getAll = async (_req, res) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getById(id);
  console.log('getbyid', message);
  if (type) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json({ message });
};

module.exports = {
  getAll,
  getById,
};
