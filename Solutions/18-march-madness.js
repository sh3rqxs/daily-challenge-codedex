function upsetProbability(matchups) {
  let upset = [];

  for (let i = 0; i < matchups.length; i++) {
    let match = matchups[i];
  
    const seedA = match[1];
    const seedB = match[3];
    
    const prob = seedA / (seedA + seedB);
    const result = Number(prob.toFixed(2));
    upset.push(result);
  }
  
  return upset;
};

// Inputs: 

// Example 1
let matchups = [
  ["Duke", 1, "Siena", 16],
  ["Ohio State", 8, "TCU", 9]
];
console.log(upsetProbability(matchups)); // Output: [ 0.06, 0.47 ]

// Example 2
matchups = [
  ["Michigan", 1, "Lehigh", 16],
  ["Nebraska", 4, "Troy", 13],
  ["Houston", 2, "Akron", 15]
];
console.log(upsetProbability(matchups)); // Output: [ 0.06, 0.24, 0.12 ]