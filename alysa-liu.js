function calculateScore(elements) {
  let elementalScore = 0;
  for (let [name, baseValue, goe] of elements) {
    let sorted = goe.sort((a, b) => a - b); // Sorts from smallest to largest.
    let middle = sorted.slice(1, -1); // Removes the first and last value.
    let sum = 0;
    for (let i = 0; i < middle.length; i++) {
      sum += middle[i]; // Adds each number.
    };
    let aveGOE = sum/middle.length;
    let score = baseValue + (aveGOE * 0.1 *baseValue); // Calculates the Elemental Score.
    elementalScore += score;
  }; 
  return Number(elementalScore.toFixed(1)); // Returns the final TES rounded to 1 decimal number.
};
// Input
// Example 1
let elements = [
  ["Triple Flip",            9.7,  [3, 2, 3, 3, 2, 4, 3, 2, 3]],
  ["Triple Lutz+Toe Combo", 12.5,  [4, 5, 4, 5, 5, 4, 4, 3, 4]],
  ["Triple Salchow",         7.0,  [2, 3, 2, 2, 3, 2, 2, 3, 2]],
  ["Triple Loop",            6.0,  [3, 3, 2, 4, 3, 3, 2, 3, 2]],
  ["Step Sequence",          3.3,  [4, 4, 4, 4, 3, 3, 4, 3, 4]]
];
console.log(calculateScore(elements)); // Output: 50.9