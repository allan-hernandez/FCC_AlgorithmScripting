// http://www.freecodecamp.com/challenges/DNA-Pairing
// Challenge Name: DNA Pairing
// Date: January 26 2016
// Used switch/case statement - pretty easy one (5 mins)

function pair(str) {
  str = str.split('');
  answer = [];
  
  for (i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A':
        answer.push(['A','T']);
        break;
      case 'T':
        answer.push(['T','A']);
        break;
      case 'C':
        answer.push(['C','G']);
        break;
      case 'G':
        answer.push(['G','C']);
        break;
    }
  }
  
  return answer;
}

pair("GCG");
