function smallestCommons(arr) {
  arr.sort();
  var min = arr[0];
  var max = arr[1];

  function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function scm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = scm(multiple, n);
    });

    return multiple;
}


smallestCommons([12,32]);
