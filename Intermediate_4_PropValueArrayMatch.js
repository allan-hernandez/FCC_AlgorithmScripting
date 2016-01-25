// http://www.freecodecamp.com/challenges/where-art-thou
// Challenge Name: Where Art Thou
// Date: January 25, 2016
// matching property and value pairs in array
// use hasOwnProperty and forEach

function where(collection, source) {
  // store matched objects
  var matched = [];

  // key-value count
  var total;

  collection.forEach(function(collObjects) { 
     total = 0; 

     for(prop in source) {
     // if property exists and value matches
        if (collObjects.hasOwnProperty(prop) && collObjects[prop] === source[prop]) {
          total++; 
        }
       }
     // do all match? push
     if (total >= Object.keys(source).length) { 
        matched.push(collObjects);
      }

    });
  
    return matched;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });