function cuddlyKittens(kittens, limit) {
  let longestGroup = 0;

  for (let i = 0; i < kittens.length; i++) {
    let min = kittens[i];
    let max = kittens[i];

    for (let j = i; j < kittens.length; j++) {
      min = Math.min(min, kittens[j]);
      max = Math.max(max, kittens[j]);

      if (max - min <= limit){
        longestGroup = Math.max(longestGroup, j - i + 1);
      } else {
        break;
      }
    }
  }

  return longestGroup;
}

// Inputs:

// Example 1
console.log(cuddlyKittens([1, 3, 6, 7, 9], 3)); // Output: 3

// Example 2
console.log(cuddlyKittens([2, 3, 4, 5], 10)); // Output: 4