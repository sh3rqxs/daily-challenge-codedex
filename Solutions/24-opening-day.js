function streakCounter(games) {
  let counter = 0;
  let longestStreak = 0;

  for (let game of games) { // Using a for...of loop.
    if (game === "W") {
      counter++;
      longestStreak = Math.max(longestStreak, counter); // Using Math.max().
    } else if (game === "L") {
      counter = 0;
    }
  }
  
  return longestStreak;
}

// Inputs:

// Example 1
console.log(streakCounter(["W", "W", "L", "W", "W", "W", "L", "W", "W"])); // Output: 3

// Example 2
console.log(streakCounter(["W", "W", "R", "W", "W", "L", "W"])); // Output: 4

// Example 3
console.log(streakCounter(["R", "R", "W", "R", "R", "W", "W", "R", "R", "W", "W", "W", "R"])); // Output: 6