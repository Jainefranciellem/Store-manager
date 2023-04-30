const connection = require('./connection');

const createSale = async (date, arraySales) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?);',
    [date],
  );

  const promise = arraySales.map(async ({ productId, quantity }) => {
     await connection.execute(
       'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
       [insertId, productId, quantity],
     );
  });

  await Promise.all(promise);

  return insertId;
};

module.exports = {
  createSale,
};
