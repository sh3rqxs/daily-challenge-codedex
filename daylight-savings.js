function calculateSleepDebt(planned, actual) {
  let totalDebt = 1; // +1 daylight savings hour.
  let currentStreak = 0;
  let maxStreak = 0;
  for (let i = 0; i < planned.length; i++) {
    // Calculates the total sleep debt for the week.
    let sleepDebt = Math.max(0, planned[i] - actual[i]);
    totalDebt += sleepDebt;
    // Calculates the longest streak of consecutive days with sleep debt.
    if (sleepDebt > 0) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    };
  };
  let result = [];
  result.push(totalDebt);
  result.push(maxStreak);
  return result;
};
// Inputs
// Example 1
let planned = [7.5, 8, 7.5, 8, 8.5, 8, 7.5];
let actual = [5, 12, 6, 6, 9, 8, 6.5];
console.log(calculateSleepDebt(planned, actual)); // Output: [ 8, 2 ]
// Example 2
planned = [6, 6, 6, 6, 6, 8, 8];
actual = [5, 7, 2.5, 5, 5.5, 6, 4];
console.log(calculateSleepDebt(planned, actual)); // Output: [ 13, 5 ]