const connection = require('./connection');

const createProductSale = async (productId, saleId, quantity) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (product_id, sale_id, quantity) VALUES (?, ?, ?);',
    [productId, saleId, quantity],
  );
  return insertId;
};

module.exports = {
  createProductSale,
};
