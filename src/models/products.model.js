const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id;',
  );
  return products;
};

const getById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [id],
  );
  return result;
};

const create = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [product.name],
  );
  return { id: insertId, name: product.name };
};

const updateProduct = async (id, name) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE  id = ?;', [name, id],
  );
  return affectedRows;
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE  id = ?;',
    [id],
  );
};

const searchProduct = async (name) => {
  const [product] = await connection.execute(
    'SELECT * FROM products WHERE name LIKE ?',
    [`%${name}%`],
  );
  return product;
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteProduct,
  searchProduct,
};
