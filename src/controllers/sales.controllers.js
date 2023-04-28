const salesService = require('../services/sales.services');

const createSales = async (req, res) => {
  const arraySales = req.body;
  const { message } = await salesService.createSales(arraySales);
  return res.status(201).json(message);
};

module.exports = {
  createSales,
};
