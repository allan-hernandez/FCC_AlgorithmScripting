// http://www.freecodecamp.com/challenges/roman-numeral-converter
// Challenge Name: Roman Numeral Converter
// Date: January 20, 2016
// Convert digit into Roman Numeral - use array/split/pop
// Use conversion to a number to force valid input

function convert(num) {
  //forces conversion to a number
  //returns true if NaN
  if (!+num) {
    return false; }
  
  // split input for process, converting to string
  var digits = String(+num).split("");
  
  var key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"];
  var answer = "";
  
  //evaluate up to third digit
  var i = 3;
  while (i-- > 0) {
      answer = (key[+digits.pop() + (i * 10)] || "") + answer;
  }
  return Array(+digits.join("") + 1).join("M") + answer;
}

// false
convert("test3");
// MMXVI
convert(2016);
