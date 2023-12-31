const productService = require('../services/products.services');

const getAll = async (_req, res) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getById(id);
  if (type) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(message);
};

const create = async (req, res) => {
  const product = req.body;
  const { message } = await productService.create(product);
  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await productService.updateProduct(id, name);
  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.deleteProduct(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(204).end();
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  const product = await productService.searchProduct(q);
  const { type, message } = product;
  if (type) return res.status(type).json(message);
  return res.status(200).json(product);
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteProduct,
  searchProduct,
};
