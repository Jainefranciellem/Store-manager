const salesService = require('../services/sales.services');

const getAll = async (_req, res) => {
  const allSales = await salesService.getAll();
  res.status(200).json(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getById(id);
  if (type) {
   return res.status(type).json({ message: 'Sale not found' });
  }
   return res.status(200).json(message);
};

const createSales = async (req, res) => {
  const arraySales = req.body;
  const { message } = await salesService.createSales(arraySales);
  return res.status(201).json(message);
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSales(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(204).end();
};

const updateSales = async (req, res) => {
  const { id } = req.params;
  const arraySales = req.body;

  const { type, message } = await salesService.updateSales(id, arraySales);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
};

module.exports = {
  getAll,
  getById,
  createSales,
  deleteSales,
  updateSales,
};
