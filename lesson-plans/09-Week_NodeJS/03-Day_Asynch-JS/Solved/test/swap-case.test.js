'use strict';

var expect = chai.expect;

describe('swapCase', function() {
  it('should swap the case when given a normal sentence', function() {
    var input = 'The Price of Greatness Is Responsibility';
    var result = swapCase(input);
    expect(result).to.eql('tHE pRICE OF gREATNESS iS rESPONSIBILITY');
  });

  it('should swap the case when given rAndoMLy aLTerNaTing cASING', function() {
    var input = 'ImAgInE If i WrOtE LiKe tHiS';
    var result = swapCase(input);
    expect(result).to.eql('iMaGiNe iF I wRoTe lIkE ThIs');
  });
});
