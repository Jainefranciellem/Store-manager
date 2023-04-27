const { expect } = require("chai");
const sinon = require("sinon");

const productService = require("../../../src/services/products.services");
const productController = require("../../../src/controllers/products.controllers");
const {
  getByIdMockWithData,
  getAllMockWithData,
} = require("../models/mock/products.mock");




describe("test products controller", () => {
  afterEach(() => sinon.restore());

  it("return status 200 and list products", async () => {
    // arranque
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, "getAll").resolves([getAllMockWithData]);

    // atc
    await productController.getAll(req, res);

    // assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([getAllMockWithData]);
  });

  it("return status 200 and products by id", async () => {

    // arranque
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, "getById").resolves([getByIdMockWithData]);

    // atc
    await productController.getById(req, res);

    // assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([getByIdMockWithData]);
  });
});
