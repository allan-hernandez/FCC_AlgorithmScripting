// Spinal Tap Case
// http://www.freecodecamp.com/challenges/spinal-tap-case 
// regex galore

function spinalCase(str) {

  
  return str.replace(/_/g, ' ')
            .replace(/\W+/g, '-')
            .replace(/([a-z\d])([A-Z])/g, '$1-$2')
            .toLowerCase();
}

spinalCase('This Is Spinal Tap');
