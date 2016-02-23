// http://www.freecodecamp.com/challenges/convert-html-entities 
// Completed on: 2/23/2016
/ Used - regex, replace, created function to pass patterns to

function replaceEntity(string,pattern,replacement) {
  var replaced = string.replace(pattern,replacement);
  
  return replaced;
}

function convert(str) {
  // & - need to do this first as all others add & 
  var match = replaceEntity(str,/\&/g,'&amp;');
  // <
  match = replaceEntity(match,/</g,'&lt;');
  // >
  match = replaceEntity(match,/>/g,'&gt;');
  // "
  match = replaceEntity(match,/\"/g,'&quot;');
  // '
  match = replaceEntity(match,/\'/g,'&apos;');
  
  return match;
}

convert("Dolce' & Gabbana\" & test & test & test > > < <");
