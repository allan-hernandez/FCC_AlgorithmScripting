// This was a quick challenge
// http://www.freecodecamp.com/challenges/search-and-replace 
// Replace word in string while maintaining case

// for lowercase to uppercase
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


function myReplace(str, before, after) {
  // break into array
  str = str.split(' ');
  
  // find word
  var i = str.indexOf(before);

  // is capital?
  var c = /^[A-Z]/.test(str[i]);

  // if capital change after to titlecase, else word will be all lowercase
  c ? (str[i] = toTitleCase(after)) : (str[i] = after.toLowerCase());
  
  // join back into a sentence
  str = str.join(' ');

  console.log(str);
}

myReplace("He is sleeping on the couch", "sleeping", "Sitting")