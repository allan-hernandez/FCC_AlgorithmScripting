// http://www.freecodecamp.com/challenges/pig-latin
// Challenge Name: Pig Latin
// Date: January 25 2016
// Used loops, charAt, slice, concat, regex

function translate(str) {
  
  // how many to remove
  var cut = 0;
  var vowel = 0;
  
  // go until no more consonants
  // if str starts with vowel, skip
  if ( (/^[aeiou]$/i).test(str.charAt(0)) === true) {
    cut = 0;  
  }
  else {  
    // if vowel is found, end for loop
    for (i = 0; i <= str.length && vowel === 0; i++) {
      if ( (/^[aeiou]$/i).test(str.charAt(i)) === true) {
        vowel = 1;
        cut = i;
      }
    } 
  }

  var end = "";
  
  // if vowel just add way
  if (cut === 0) {
    str = str.concat("way");
  }
  else {
    // take consonants now 
    end = str.slice (0,cut);
    // add them to string
    str = str.concat(end);
    // add ending
    str = str.concat("ay");
    // get rid of consonants from start
    str = str.slice(cut,str.length);
  }
  
  return str;
}

translate("california");
