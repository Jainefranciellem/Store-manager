const salesModel = require('../models/sales.model');

const createSales = async (salesArray) => {
  const date = new Date();

  const salesId = await salesModel.createSale(date, salesArray);

  return { type: null, message: { id: salesId, itemsSold: salesArray } };
};

module.exports = {
  createSales,
};
