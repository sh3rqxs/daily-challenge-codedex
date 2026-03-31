function infiniteMonkey(target, attempt) {
  // Finds best_index.
  let bestIndex = 0;
  let bestScore = -1;
  for (let i = 0; i < attempt.length - target.length; i++) {
    const window = attempt.slice(i, i + target.length);
    let score = 0;
    for (let j = 0; j < target.length; j++) {
      if (window[j] === target[j]) {
        score++
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  }

  // Calculates similarity.
  const percentage = (bestScore / target.length) * 100;
  const roundedPercentage = Math.round(percentage * 100) / 100;

  // Calculates attempts.
  let triesNeeded = 0;
  if (percentage === 0) {
    triesNeeded = null;
  } else {
    triesNeeded = Math.round(1 / (percentage / 100) ** target.length);
  }

  return {best_index: bestIndex, similarity: roundedPercentage, attempts: triesNeeded};
}

// Inputs:

// Example 1
console.log(infiniteMonkey("hamlet", "xxhamxetxxxx")); // { best_index: 2, similarity: 83.33, attempts: 3 }

// Example 2
console.log(infiniteMonkey("To be, or not to be.", "7q$To be, or not to bug?9x")); // { best_index: 3, similarity: 90, attempts: 8 }