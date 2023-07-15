const checkUser = require('../lib/checkUser').checkUserStatus;

const chai = require('chai');

const expect = chai.expect;

describe('Check user', () => {
  it('When user is 85 years old it should be ADULT', () => {
    expect(checkUser(85), 'user when 55 years old').to.equal('ADULT');
  });
  it('When user is 5 years old it should be ADULT', () => {
    expect(checkUser(5), 'user when 10 years old').to.equal('CHILD');
  });
});
