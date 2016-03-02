// Sum all odd fibonacci numbers up to a max
// Completed March 1 
// http://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers
// array filter, nothing new just felt tricky 

function sumFibs(num) {
  var fib = [];
  
  // first generate fib sequence
  fib = getFib(num);
  
  // filter odd only 
  var final = fib.filter(isOdd);
  
  // sum and return
  return arrSum(final);
}

function getFib(max) {
  // start with first two
  var prev = 0;
  var curr = 1;
  var fib = [];
  
  // go until match - the instructions made it sound like adding up to max was needed
  // ended up changing fib.push(curr) to fib.push(prev) and passed all tests
  while (curr <= max) {
    curr = curr + prev;
    prev = curr - prev;
    
    fib.push(prev);
      console.log('max' + max + ' current ' + curr + ' prev '+prev);
  }
  
  console.log(fib);
  return fib;
}

function arrSum(arr) {
  var total = 0;
  
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  
  return total;
}

sumFibs(4);
