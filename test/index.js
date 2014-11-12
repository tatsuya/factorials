var assert = require('assert');

var factorials = {
  1: require('../1'),
  2: require('../2'),
  3: require('../3')
};

Object.keys(factorials).forEach(function(index) {
  var factorial = factorials[index];

  describe('factorial ' + index, function() {
    it('should work with 0', function() {
      assert.equal(factorial(0), 1);
    });
    it('should work with 1', function() {
      assert.equal(factorial(1), 1);
    });
    it('should work with 10', function() {
      assert.equal(factorial(10), 3628800);
    });
    it('should work with 20', function() {
      assert.equal(factorial(20), 2432902008176640000);
    });
  });
});
