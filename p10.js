
function p10() {
  // 2e+6 maxValue
  var i = 2e+6;
  var sum = 0;

  
  while (i >= 2) {
    if (isPrime(i) === true) {
      sum += i;
    }

    i--;
  }

  function isPrime(n) {
    var j = Math.floor(Math.sqrt(n));

    while (j >= 2) {
      if (n % j === 0) {
        return false;
      }
      j--;
    }

    return true;
  }

  return sum;
}


console.log(p10());