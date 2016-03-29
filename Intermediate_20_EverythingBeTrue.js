// https://www.freecodecamp.com/challenges/everything-be-true

function every(collection, pre) {
  // assume true
  var truthy = true;
  
  for (i =0; i< collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre) || !Boolean(collection[i][pre])) {
      truthy= false;
    }
  }
  
  return truthy;
}

every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
