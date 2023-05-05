const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const chai = require("chai");

chai.use(sinonChai);


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

    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'getById').resolves({type: null, message: getByIdMockWithData});

    await productController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getByIdMockWithData);
  });

  it("return status 404 and product not found", async function () {
    afterEach(() => sinon.restore());

    const res = {};
    const req = {
      params: { id: 50 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "getById")
      .resolves({ type: "PRODUCT_NOT_FOUND", message: "Product not found" });

    await productController.getById(req, res);

    expect(res.status).to.have.been.calledOnce;
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Product not found" });
  });

   it("return status 201 and created product", async function () {
     const res = {};
     const req = {
       body: { name: "ProdutoX" },
     };

     res.json = sinon.stub().returns();
     sinon
       .stub(productService, "create")
       .resolves({ type: null, message: { id: 5, name: "ProdutoX" } });
     res.status = sinon.stub().returns(res);

     await productController.create(req, res);

     expect(res.status).to.have.been.calledWith(201);
     expect(res.json).to.have.been.calledWith({ id: 5, name: "ProdutoX" });
   });

   it("Delete Product with id", async () => {
     const req = { params: { id: Infinity } };
     const res = {};

     res.status = sinon.stub().returns(res);
     res.json = sinon.stub().returns();

     await productController.deleteProduct(req, res);

     expect(res.status.calledWith(404)).to.be.equal(true);
   });

  it("return status 200 and update product", async () => {
    const product = { name: "Stormbreaker" };
    sinon.stub(productService, "updateProduct").resolves({
      id: 1,
      name: "Stormbreaker",
    });

    const req = { params: { id: 1 }, body: product };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.updateProduct(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

