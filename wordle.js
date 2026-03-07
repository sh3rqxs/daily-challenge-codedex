function wordleGuess(secret, guess) {
  let count = 0;
  for (let i = 0; i < secret.length; i++){
    if (secret[i] === guess[i]) {
        count++;
    };
  };
  return count;
};
// Inputs
// Example 1
let secret = "CODEX";
let guess = "COINS";
console.log(wordleGuess(secret, guess)); // Output: 2
// Example 2
secret = "HELLO";
guess = "WORLD";
console.log(wordleGuess(secret, guess)); // Output: 1