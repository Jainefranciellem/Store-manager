const connection = require('./connection');

const createSale = async (date) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?);',
    [date],
  );
  return insertId;
};

module.exports = {
  createSale,
};
