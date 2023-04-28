const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const { getAllMockWithData, getByIdMockWithData } = require('./mock/products.mock');

describe('test products model', () => {
  afterEach(() => sinon.restore());

  it('GetAll with data', async () => {
    // arranque
    sinon.stub(connection, "execute").resolves([getAllMockWithData]);

    // atc
    const result = await productsModel.getAll();

    // assert
    expect(result).to.be.an("array");
    expect(result).to.have.length(3);
    expect(result[0]).to.contain.keys("id", "name");
  });

  it("GetAll without data", async () => {
    sinon.stub(connection, "execute").resolves([[]]);

    const result = await productsModel.getAll();

    expect(result).to.be.an("array");
    expect(result).to.have.length(0);
  });


  it('getById with data', async () => {
    sinon.stub(connection, "execute").resolves([[getByIdMockWithData]]);

    const result = await productsModel.getById(1);

     expect(result).to.be.an("object");
     expect(result).to.deep.equal(getByIdMockWithData);
  });

   it("getById without data", async () => {
     sinon.stub(connection, "execute").resolves([[]]);

     const result = await productsModel.getById(50);

     expect(result).to.be.undefined;
   });

  it("getById without data", async () => {
    sinon.stub(connection, "execute").resolves([{ id: 5, name: 'productX' }]);

    const result = await productsModel.create({ id: 5, name: "productX" });

    expect(result).to.be.an('object');
    expect(result).to.be.keys('id', 'name');
  });

});
