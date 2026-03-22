function leakyPipe(volume, leak, hours, threshold) {
  let currentVolume = volume;
  let percentagePerHours = leak;
  let iterations = hours;
  let waterRemaining = 0;
  
  for (let i = 0; i < iterations; i++) {
    currentVolume = currentVolume * [1 - (percentagePerHours / 100)];
    if (currentVolume >= threshold) {
      waterRemaining = Number(currentVolume.toFixed(2));
    } else {
      waterRemaining = -1;
    }
  }

  return waterRemaining;
}

// Inputs:

// Example 1
console.log(leakyPipe(1000, 5, 3, 100)); // Output: 857.38

// Example 2
console.log(leakyPipe(200, 30, 6, 100)); // Output: -1