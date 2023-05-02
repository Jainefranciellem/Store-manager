const getAllMockWithData = [
  {
    saleId: 1,
    date: "2023-05-01T19:47:02.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2023-05-01T19:47:02.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2023-05-01T19:47:02.000Z",
    productId: 3,
    quantity: 15,
  },
];

const getByIdMockWithData =
  [{
    date: "2023-05-01T22:14:17.000Z",
    productId: 3,
    quantity: 15,
  }];


const creatMockData = {
  type: null, message: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ]
};



module.exports = { getAllMockWithData, getByIdMockWithData, creatMockData };
