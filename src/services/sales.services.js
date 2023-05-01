const salesModel = require('../models/sales.model');

const getAll = async () => {
  const sales = salesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  console.log(sale, 'service');
  if (!sale || sale.length === 0) {
    return { type: 404, message: 'Sale not found' };
  }
  return { type: null, message: sale };
};

const createSales = async (salesArray) => {
  const date = new Date();

  const salesId = await salesModel.createSale(date, salesArray);

  return { type: null, message: { id: salesId, itemsSold: salesArray } };
};

module.exports = {
  getAll,
  getById,
  createSales,
};
