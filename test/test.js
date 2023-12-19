const chai = require("chai");

const expect = chai.expect;

describe("Basic Math Operations", function () {
  it("should return 4 when adding 2 and 2", function () {
    const result = 2 + 2;
    expect(result).to.equal(4);
  });
});

const calculator = require("../src/calculator");

describe("Test Calculator", function () {
  it("should return 1", function () {
    expect(calculator.add("1")).to.equal(1);
  });
});
