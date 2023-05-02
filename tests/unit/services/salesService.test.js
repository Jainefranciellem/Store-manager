const { expect } = require("chai");
const sinon = require("sinon");

const saleService = require("../../../src/services/sales.services");
const saleModel = require("../../../src//models/sales.model");

const {
  getAllMockWithData,
  getByIdMockWithData,
  creatMockData,
} = require("../models/mock/sales.mock");

describe("test sales service", () => {
  afterEach(() => sinon.restore());

  it("getAll with data", async () => {
    sinon.stub(saleModel, "getAll").resolves(getAllMockWithData);

    const result = await saleService.getAll();

    expect(result).to.be.an("array");
    expect(result).to.have.length(3);
    expect(result).to.deep.equal(getAllMockWithData);
  });

  it("getById with data", async () => {
    sinon.stub(saleModel, "getById").resolves(getByIdMockWithData);

    const result = await saleService.getById(2);

    expect(result).to.be.an("object");
    expect(result.message).to.deep.equal(getByIdMockWithData);
  });

  it("getById without data", async () => {
    sinon.stub(saleModel, "getById").resolves([]);

    const result = await saleService.getById(50);

    expect(result.type).to.deep.equal(404);
    expect(result.message).to.deep.equal("Sale not found");
  });

  it("create with data ", async () => {
    sinon.stub(saleModel, "createSales").resolves(creatMockData);

    const result = await saleService.createSales(creatMockData);

    expect(result).to.be.an("object");
    // expect(result.message).to.be.equal("productId");
    // expect(result.message.id).to.be.equal(5);
  });
});
