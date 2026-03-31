function flatten(array) {
  let flattenedArray = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      flattenedArray.push(...flatten(item));
    } else {
      flattenedArray.push(item);
    }
  }

 return flattenedArray; 
}

// Inputs:

// Example 1
console.log(flatten([1, [2, 3], 4, 5])); // Output: [ 1, 2, 3, 4, 5 ]

// Example 2
console.log(flatten([1, 2, [3, [4, 5]], 6, 7])); // Output: [ 1, 2, 3, 4, 5, 6, 7 ]