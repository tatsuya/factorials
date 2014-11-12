module.exports = function factorial(n) {
  var ret = 1;
  for (var i = 2; i <= n; i++) {
    ret *= i;
  }
  return ret;
}