// https://www.freecodecamp.com/challenges/drop-it
// simple shift on condition fail

function drop(arr, func) {
  var initLen = arr.length;
  
  for (var i = 0; i < initLen; i++) {
    if (func(arr[0])) {
      break;
    }
    else {
      arr.shift();
    }
  }
  
   return arr;  
}

drop([1, 2, 3, 4], function(n) {return n > 5;});
