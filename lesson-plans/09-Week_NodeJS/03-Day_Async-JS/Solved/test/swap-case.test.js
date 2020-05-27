'use strict';
/* eslint-disable no-magic-numbers */

var expect = chai.expect;

describe('swapCase', function() {
  it('should swap the case when given a normal sentence', function() {
    const input = 'The Price of Greatness Is Responsibility';
    const result = swapCase(input);
    expect(result).to.eql('tHE pRICE OF gREATNESS iS rESPONSIBILITY');
  });

  it('should swap the case when given rAndoMLy aLTerNaTing cASING', function() {
    const input = 'ImAgInE If i WrOtE LiKe tHiS';
    const result = swapCase(input);
    expect(result).to.eql('iMaGiNe iF I wRoTe lIkE ThIs');
  });
});
