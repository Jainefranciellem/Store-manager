const salesModel = require('../models/sales.model');

const getAll = async () => {
  const sales = salesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  if (!sale || sale.length === 0) {
    return { type: 404, message: 'Sale not found' };
  }
  return { type: null, message: sale };
};

const createSales = async (salesArray) => {
  const salesId = await salesModel.createSales(salesArray);

  return { type: null, message: { id: salesId, itemsSold: salesArray } };
};

const deleteSales = async (id) => {
  const saleId = await salesModel.getById(id);
  console.log('n entrou no if', saleId);
  if (saleId.length === 0) {
    return { type: 404, message: 'Sale not found' };
  }
  await salesModel.deleteSales(id);
  return { type: null, message: saleId };
};

module.exports = {
  getAll,
  getById,
  createSales,
  deleteSales,
};
