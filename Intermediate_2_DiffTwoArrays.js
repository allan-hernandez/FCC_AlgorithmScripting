// http://www.freecodecamp.com/challenges/diff-two-arrays
// Challenge Name: Diff Two Arrays
// Date: January 19, 2016
// Used indexOf

function inArr(ar, check) {
  var filtered = [];
  
  for (i = 0; i < ar.length; i++) {
    if (check.indexOf(ar[i]) == -1 ) {
      filtered.push(ar[i]);
    }
  }
  
  return filtered;
}

function diff(arr1, arr2) {
  var finalArr = [];
  var arr1f = [];
  var arr2f = [];
  
  arr1f = inArr(arr1,arr2);
  arr2f = inArr(arr2,arr1);
  
  finalArr = arr1f.concat(arr2f);
  
  return finalArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
