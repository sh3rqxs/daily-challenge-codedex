function minimumComponents(components) {
  // Defines the target and the minimum count.
  const target = 42;
  let minCount = Infinity;

  // Finds the combination with the minimum number of components.
  function findCombinations(index, currentSum, currentCount) {

    // Success: Found a combination.
    if (currentSum === target) {
      if (currentCount < minCount) {
        minCount = currentCount;
      };
      return;
    };

    // Failure: Exceeded the target or ran out of components.
    if (currentSum > target || index >= components.length) {
      return;
    };

    // Tells when to pick or skip the current component.

    // Option 1: Picks the current component.
    findCombinations(index + 1, currentSum + components[index], currentCount + 1);

    // Option 2: Skips the current component.
    findCombinations(index + 1, currentSum, currentCount);
  };
  findCombinations(0, 0, 0);

  // Returns -1 if it was impossible to reach exactly 42.
  if (minCount === Infinity) {
    return -1;
  };

  return minCount;
};

// Inputs:

// Example 1
let components = [10, 20, 5, 15, 7];
console.log(minimumComponents(components)); // Output: 3

// Example 2
components = [1, 2, 3, 4, 5, 6];
console.log(minimumComponents(components)); // Output: -1

// Example 3
components = [42, 1, 1, 1];
console.log(minimumComponents(components)); // Output: 1