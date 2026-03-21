function tweetBalance(tweet) {
  let bankAccount = 140;
  let count = 0;
  let string = tweet.split(" ");

  for (let word of string) {
    if (word.startsWith("@")) { // Usernames
      count += 20;
    } else if (word.startsWith("http://") || word.startsWith ("https://")) { // URLs
      count += 23;
    } else if (/\p{Emoji}/u.test(word)) { // Emojis
      count += 2;
    } else { // All other characters
      count += word.length;
    }
  }

  count += string.length - 1; // Adds spaces
  return bankAccount - count;
}

// Inputs:

// Example 1
let tweet = "just setting up my twttr";
console.log(tweetBalance(tweet)); // Output: 55

// Example 2
tweet = "Check out this link https://www.averylongurlthatgoesonnnnnn.com and this one https://short.co too!"
console.log(tweetBalance(tweet)); // Output: 116