'use strict';

const expect = chai.expect;

describe('caesarCipher', function() {
  it(`should return "Jgnnq Vjgtg" if given the string "Hello There" and the offset 2`, function() {
    const str = 'Hello There';
    const offset = 2;

    const result = caesarCipher(str, offset);

    expect(result).to.eql('Jgnnq Vjgtg');
  });

  it(`should return "Hello There" if given the string "Jgnnq Vjgtg" and the offset -2`, function() {
    const str = 'Jgnnq Vjgtg';
    const offset = -2;

    const result = caesarCipher(str, offset);

    expect(result).to.eql('Hello There');
  });

  it(`should return "Ymj Vznhp Gwtbs Ktc Ozruji Tajw Ymj Qfed Itl" if given the string "The Quick Brown Fox Jumped Over The Lazy Dog" and the offset 31`, function() {
    const str = 'The Quick Brown Fox Jumped Over The Lazy Dog';
    const offset = 31;

    const result = caesarCipher(str, offset);

    expect(result).to.eql('Ymj Vznhp Gwtbs Ktc Ozruji Tajw Ymj Qfed Itl');
  });

  it(`should return "The Quick Brown Fox Jumped Over The Lazy Dog" if given the string "Ymj Vznhp Gwtbs Ktc Ozruji Tajw Ymj Qfed Itl" and the offset -31`, function() {
    const str = 'Ymj Vznhp Gwtbs Ktc Ozruji Tajw Ymj Qfed Itl';
    const offset = -31;

    const result = caesarCipher(str, offset);

    expect(result).to.eql('The Quick Brown Fox Jumped Over The Lazy Dog');
  });

  it(`should return "Qebob fp kl pmllk" if given the string "There is no spoon" and the offset 1999`, function() {
    const str = 'There is no spoon';
    const offset = 1999;

    const result = caesarCipher(str, offset);

    expect(result).to.eql('Qebob fp kl pmllk');
  });

  it(`should return "There is no spoon" if given the string "Qebob fp kl pmllk" and the offset -1999`, function() {
    const str = 'Qebob fp kl pmllk';
    const offset = -1999;

    const result = caesarCipher(str, offset);

    expect(result).to.eql('There is no spoon');
  });
});
