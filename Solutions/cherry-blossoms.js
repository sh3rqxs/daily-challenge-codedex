function cherryBlossoms(temps) {
  let bloomDay = -1;

  for (let i = 4; i < temps.length; i++) {
    let sum = 0;
    for (let j = i - 4; j <= i; j++) {
      sum += temps[j];
    }
    let avg = sum / 5;
    if (avg >= 15) {
      bloomDay = i + 1;
      return bloomDay;
    }
  }

  return bloomDay;
};

// Inputs:

// Example 1
temps = [10, 11, 13, 14, 16, 17, 18];
console.log(cherryBlossoms(temps)); // Output: 7

// Example 2
temps = [12, 14, 15, 16, 17, 11, 13];
console.log(cherryBlossoms(temps)); //Output: -1