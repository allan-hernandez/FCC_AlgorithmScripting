// much easier than 15...
// 3/3/2016 

function find(arr, func) {
  var matched =  arr.filter(func);
  
  return matched[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
