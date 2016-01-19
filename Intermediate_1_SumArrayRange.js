// http://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
// Challenge Name: Sum All Numbers in a Range
// Date: January 19, 2016
// Used min/max apply on an array

function sumAll(arr) {
  var smallest = Math.min.apply(null,arr);
  var largest = Math.max.apply(null,arr);
  
  var answer = 0;
  
  for (i = smallest; i <= largest; i++) {
    answer += i;
  }
  
  return answer;
}
