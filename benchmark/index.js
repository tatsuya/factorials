var factorials = {
  1: require('../1'),
  2: require('../2'),
  3: require('../3')
};

for (var key in factorials) {
  var factorial = factorials[key];

  var start = new Date().getTime();
  for (var i = 0; i < 10000; i++) {
    factorial(100);
  }
  var end = new Date().getTime();
  var time = end - start;

  console.log('factorial ' + key + ': ' + time + ' (ms)');
}
