// Challenge: http://www.freecodecamp.com/challenges/sorted-union 
// Completed: 02/11/2016
// Use of: filter, arrays, arguments

function unite(arr1, arr2, arr3, arr4,arr5,arr6) {
  var fullArray = [];
  
  // for every set of arrays in arguments
  for (i = 0; i < arguments.length; i++) {
    // for every element in array
    for (a = 0; a < arguments[i].length; a++) {
      fullArray.push(arguments[i][a]); 
    }
  }
   
  //now that they're joined, filter out dupes
  fullArray = fullArray.filter(uniqueValues);
  
  return fullArray;
}

function uniqueValues(value, index, self) { 
    return self.indexOf(value) === index;
}

unite([1, 3, 2], [1, [5]], [2, [4]]);
