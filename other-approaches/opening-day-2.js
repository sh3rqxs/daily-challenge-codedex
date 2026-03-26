function streakCounter(games) {
  let counter = 0;
  let longestStreak = 0;

  for (let i = 0; i < games.length; i++) { // Using a classic for loop.
    let game = games[i];
    if (game === "W") {
      counter++;
      if (counter > longestStreak) { // Using an if statement.
        longestStreak = counter;
      }
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