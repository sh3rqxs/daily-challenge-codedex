function checkPalindrome(sequence) {
  // Lowercases the sequence.
  let lowercasedSequence = sequence.toLowerCase();
  
  // Removes spaces.
  let cleanedSequence = lowercasedSequence.replaceAll(" ", "");
  
  // Reverses the sequence.
  let reversedSequence = cleanedSequence.split("").reverse().join("");
  
  // Checks if the sequence is a palindrome.  
  return cleanedSequence === reversedSequence;
};

// Input:

// Example 1
let sequence = "racecar";
console.log(checkPalindrome(sequence)); // Output: true

// Example 2
sequence = "Was it a car or a cat I saw";
console.log(checkPalindrome(sequence)); // Output: true

// Example 3
sequence = "11 11";
console.log(checkPalindrome(sequence)); // Output: true

// Example 4
sequence = "12345";
console.log(checkPalindrome(sequence)); // Output: false