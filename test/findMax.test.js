const findMax = require('../lib/findMax').findMax1;

const chai = require('chai');

const expect = chai.expect;

describe.only('Check findMax1 function with three positive values', () => {
  it('when first is biggest', () => {
    expect(findMax(100, 1, 222)).to.equal(222);
  });
  it('when second is biggest', () => {
    expect(findMax(1, 5, 150)).to.equal(150);
  });
});
