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

    expect(result.type).to.deep.equal(404);
    expect(result.message).to.deep.equal("Product not found");
  });

  it('create with data ', async () => {
    sinon.stub(productModel, "create").resolves({ id: 5, name: "ProdutoX" });

    const result = await productService.create({ id: 5, name: "ProdutoX" })

    expect(result).to.be.an('object')
    expect(result.message.name).to.be.equal("ProdutoX");
    expect(result.message.id).to.be.equal(5);
  });

   it("Delete Product", async () => {
     sinon.stub(productModel, "deleteProduct").resolves();
     const result = await productService.deleteProduct(1);
     expect(result).to.be.an("object");
     expect(result.message).to.have.keys(["id", "name"]);
   });

   it("Search Product", async () => {
     const result = await productService.searchProduct("Martelo");
     expect(result).to.be.an("array");
     expect(result).to.have.length(1);
     expect(result[0]).to.have.keys(["id", "name"]);
     expect(result[0].name).to.be.equal("Martelo de Thor");
   });
});
