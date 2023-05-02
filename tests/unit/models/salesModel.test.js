// const { expect } = require("chai");
// const sinon = require("sinon");

// const salesModel = require("../../../src/models/sales.model");
// const connection = require("../../../src/models/connection");
// const {
//   getAllMockWithData,
//   getByIdMockWithData,
// } = require("./mock/sales.mock");

// describe("test service model", () => {
//   afterEach(() => sinon.restore());

//   it("GetAll with data", async () => {
//     // arranque
//     sinon.stub(connection, "execute").resolves([getAllMockWithData]);

//     // atc
//     const result = await salesModel.getAll();

//     // assert
//     expect(result).to.be.an("array");
//     expect(result).to.have.length(3);
//     expect(result[0]).to.contain.keys("id", "name");
//   });

//   it("GetAll without data", async () => {
//     sinon.stub(connection, "execute").resolves([[]]);

//     const result = await salesModel.getAll();

//     expect(result).to.be.an("array");
//     expect(result).to.have.length(0);
//   });

//   it("getById with data", async () => {
//     sinon.stub(connection, "execute").resolves([getByIdMockWithData]);

//     const result = await salesModel.getById(1);

//     expect(result).to.be.an("array");
//     expect(result).to.deep.equal(getByIdMockWithData);
//   });

//   it("getById without data", async () => {
//     sinon.stub(connection, "execute").resolves([[]]);

//     const result = await salesModel.getById(50);

//     expect(result).to.be.undefined;
//   });

//   it("getById without data", async () => {
//     sinon.stub(connection, "execute").resolves([{ id: 5, name: "productX" }]);

//     const result = await salesModel.create({ id: 5, name: "productX" });

//     expect(result).to.be.an("object");
//     expect(result).to.be.keys("id", "name");
//   });
// });
