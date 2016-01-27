// http://www.freecodecamp.com/challenges/missing-letters
// Challenge Name: Missing Letters
// Date: January 26 2016
// Nested if statements - I assume there's a more efficient way to handle this...

function fearNotLetter(str) {
  str = str.split('');
  
  // convert all to ascii code
  for (i = 0; i < str.length; i++) {
    str[i] = str[i].charCodeAt(0);
  }
  
  // store missing values to add later 
  var missing = [];
  
  // iterate through string
  for (i = 0; i < str.length - 1; i++) {
    // skip the first one - that's our base
    if (str[i] !== 0) {
      // if n value doesn't equal n+1 value (in array) - 1, missing
      if (str[i] !== str[i+1]-1) {
        //add to missing list
        missing.push(str[i] +1);
      }
    }
  }
  
  //convert missing to char
  for (i = 0; i < missing.length; i++) {
    missing[i] = String.fromCharCode(missing[i]);
  }
  
  // this only  passes if I don't return a non-array 
  // however instructions never specify to expect only 1 missing 
  // ¯\_(ツ)_/¯
  return missing[0];
}

fearNotLetter("abce");
