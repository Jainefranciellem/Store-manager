const { expect } = require("chai");
const sinon = require("sinon");

const productService = require('../../../src/services/products.services');
const productModel = require("../../../src//models/products.model");
const {getAllMockWithData, getByIdMockWithData} = require('../models/mock/products.mock')

describe("test products service", () => {
  afterEach(() => sinon.restore());

  it("getAll with data", async () => {
    sinon.stub(productModel, "getAll").resolves(getAllMockWithData);

    const result = await productService.getAll();

      expect(result).to.be.an("array");
      expect(result).to.have.length(3);
      expect(result).to.deep.equal(getAllMockWithData);
  });

  it("getById with data", async () => {
    sinon.stub(productModel, "getAll").resolves([[getByIdMockWithData]]);

    const result = await productService.getById(1);

    expect(result).to.be.an("object");
    expect(result.message).to.deep.equal(getByIdMockWithData);
  });

  it("getById without data", async () => {
    sinon.stub(productModel, "getAll").resolves([[]]);

    const result = await productService.getById(50);

    expect(result.type).to.deep.equal("PRODUCT_NOT_FOUND");
    expect(result.message).to.deep.equal("Product not found");
  });
});
