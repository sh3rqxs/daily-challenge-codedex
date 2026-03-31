function earthquakeAnomaly(readings) {
  let sorted = [...readings].sort((a, b) => a - b);
  let median = 0;

  if (sorted.length % 2 === 0) {
    let mid1 = sorted[sorted.length / 2 - 1];
    let mid2 = sorted[sorted.length / 2];
    median = (mid1 + mid2) / 2;
  } else {
    median = sorted[Math.floor(sorted.length / 2)];
  }

  let suspicious = [];
  let threshold = median * 1.5;

  for (let i = 0; i < readings.length; i++) {
    if (readings[i] > threshold) {
      suspicious.push(i);
    }
  }
  
  return suspicious;
}

// Inputs:

// Example 1
console.log(earthquakeAnomaly([2.1, 1.8, 2.0, 1.9, 6.5, 2.2])); // Output: [ 4 ]

// Example 2
console.log(earthquakeAnomaly([1.0, 1.2, 1.1, 1.3, 1.0, 1.2, 1.1])); // Output: [ ]

// Example 3
console.log(earthquakeAnomaly([3.0, 7.5, 2.8, 8.1, 3.2, 2.9])); // Output: [ 1, 3 ]