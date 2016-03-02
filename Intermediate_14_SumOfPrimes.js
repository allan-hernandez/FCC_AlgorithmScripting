// http://www.freecodecamp.com/challenges/sum-all-primes 
// math
// basic structure: get primes > add them
// getting easier :)

function sumPrimes(num) {
  // get list of primes
  var allPrimes = [];
  
  for (var i = 0; i <= num; i++) {
    allPrimes.push(primeTest(i));
  }
  console.log(allPrimes);
  var total = getSum(allPrimes);
 
  return total;
}


// formula learned from hacker rank
function primeTest(n) {
  var start = 2;
  while (start <= Math.sqrt(n)) {
      if (n % start++ < 1) return 0;
  }
  return n;
}

function getSum(n) {
  var total = 0;
  
  for (i = 0; i < n.length; i++) {
    total += n[i];    
    console.log(total);
  }
  
  // becausee 1 is not a prime
  return total - 1;
}

sumPrimes(10);
