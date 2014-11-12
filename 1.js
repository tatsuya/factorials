module.exports = function factorial(n) {
  var ret = 1;
  while (n > 0) {
    ret *= n;
    n--;
  }
  return ret;
}