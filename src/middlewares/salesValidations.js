const validationProduct = async (req, res, next) => {
  const salesArray = req.body;

    for (let index = 0; index < salesArray.length; index += 1) {
      const element = salesArray[index];

      if (!element.productId) {
        return res.status(400).json({ message: '"productId" is required' });
      }
    }

  next();
};

const validationQuantity = async (req, res, next) => {
  const salesArray = req.body;

  for (let index = 0; index < salesArray.length; index += 1) {
    const element = salesArray[index];

    if (element.quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (element.quantity <= 0) {
      return res
        .status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
    next();
  }
};

module.exports = { validationProduct, validationQuantity };
