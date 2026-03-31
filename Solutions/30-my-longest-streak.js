function longestStreak(progress) {
  let streak = 0;
  let longestStreak = 0;
  
  for (let day of progress) {
    if (day === "✅") {
      streak++;
      longestStreak = Math.max(longestStreak, streak)
    } else if (day === "❌") {
      streak = 0;
    }
  }
  
  return longestStreak;
}

// Inputs:

// Example 1
console.log(longestStreak(['✅', '✅', '✅', '✅', '✅', '✅', '❌'])); // Output: 3

// Example 2
console.log(longestStreak(['✅', '✅', '❌', '✅', '✅', '✅', '❌', '❌', '✅', '✅'])); // Outfput: 6