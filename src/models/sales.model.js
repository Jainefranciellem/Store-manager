const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT sales.id AS saleId, sales.date AS date,
    product.product_id AS productId,
    product.quantity AS quantity
    FROM StoreManager.sales AS sales
    JOIN StoreManager.sales_products AS product
    ON product.sale_id = sales.id;`,
  );
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT sales.date AS date,
    product.product_id AS productId,
    product.quantity AS quantity
    FROM StoreManager.sales AS sales
    JOIN StoreManager.sales_products AS product
    ON product.sale_id = sales.id
    WHERE sales.id = ?;`, [id],
  );
  return sale;
};

const createSales = async (arraySales) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ();',
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

const deleteSales = async (id) => {
  await connection.execute('DELETE FROM StoreManager.sales WHERE  id = ?;', [
    id,
  ]);
};

module.exports = {
  createSales,
  getAll,
  getById,
  deleteSales,
};
