const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const chai = require("chai");

chai.use(sinonChai);

const saleService = require("../../../src/services/sales.services");
const saleController = require("../../../src/controllers/sales.controllers");
const {
  getByIdMockWithData,
  getAllMockWithData,
  creatMockData,
} = require("../models/mock/sales.mock");

describe("test sales controller", () => {
  afterEach(() => sinon.restore());

  it("return status 200 and list products", async () => {
    // arranque
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(saleService, "getAll").resolves([getAllMockWithData]);

    // atc
    await saleController.getAll(req, res);

    // assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([getAllMockWithData]);
  });

  it("return status 200 and sale by id", async () => {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(saleService, "getById")
      .resolves({ type: null, message: getByIdMockWithData });

    await saleController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getByIdMockWithData);
  });

  it("return status 404 and sales not found", async function () {
    afterEach(() => sinon.restore());

    const res = {};
    const req = {
      params: { id: 50 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(saleService, "getById")
      .resolves({ type: 404, message: "Sale not found" });

    await saleController.getById(req, res);

    expect(res.status).to.have.been.calledOnce;
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Sale not found" });
  });

  it("return status 201 and created sale", async () => {
    const res = {};
    const req = {
      body: creatMockData.message,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(saleService, "createSales").resolves(creatMockData);

    await saleController.createSales(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(creatMockData.message);
  });
});
