// https://www.freecodecamp.com/challenges/steamroller

function steamroller(arr) {
  var final = [];
  
  var check = function(a) {
    if (Array.isArray(a)) {
      for (var e in a) {
        // value is array -  call function again
        check(a[e]);
      }
    }
    else {
      final.push(a);
    }
    
  };
  
  arr.forEach(check);
  return final;
}

steamroller([1, [2], [3, [[4]]]]);
