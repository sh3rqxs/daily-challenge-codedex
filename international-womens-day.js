function analyze(percentages) {
  // Calculates Net Change Per Year.
  let years = percentages.length;
  let netChangePerYear = (percentages[years - 1] - percentages[0]) / (years - 1);
  netChangePerYear = Number(netChangePerYear.toFixed(4));
  // Determines the Trend.
  let first3YearsAve = (percentages[0] + percentages[1] + percentages[2]) / 3;
  let last3YearsAve = (percentages[years - 3] + percentages[years - 2] + percentages[years -1]) / 3;
  let trend = 0;
  if (last3YearsAve > first3YearsAve) {
    trend = "improving";
  } else if (last3YearsAve === first3YearsAve) {
    trend = "stagnating";
  } else {
    trend = "declining";
  };
  // Counts the Dips.
  let dips = 0;
  for (let i = 1; i < percentages.length; i++) {
    if (percentages[i] < percentages[i - 1]) {
      dips++;
    };
  };
  let results = [];
  results.push(netChangePerYear);
  results.push(trend);
  results.push(dips);
  return results;
};
// Outputs:
// Example 1 - Meta
let percentages = [31.0, 31.0, 33.0, 35.0, 36.0, 36.0, 36.2, 36.7, 37.1];
console.log(analyze(percentages)); // Output: [ 0.7625, 'improving', 0 ]
// Example 2 - Amazon
percentages = [42.0, 43.0, 42.0, 43.0, 44.0, 44.0, 44.6, 44.8, 44.7, 45.0, 45.8];
console.log(analyze(percentages)); // Output: [ 0.38, 'improving', 2 ]
//Example 3 - Apple
percentages = [30.0, 31.0, 32.0, 32.0, 33.0, 34.0, 34.0, 34.8, 35.0, 35.0, 35.3];
console.log(analyze(percentages)); // Output: [ 0.53, 'improving', 0 ]