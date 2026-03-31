function findUniqueWords(transcript) {
  // Lowercases the transcript.
  let lowercasedTranscript = transcript.toLowerCase();

  // Removes the unnecessary punctuation.
  let cleanedTranscript = lowercasedTranscript.replace(/[^\w\s]/g, "");

  // Splits the cleaned transcript into words.
  let words = cleanedTranscript.split(" ");

  // Tracks the unique words from the cleaned transcript manually.
  let uniqueWordsCounter = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word !== "" && !uniqueWordsCounter.includes(word)) {
      uniqueWordsCounter.push(word);
    };
  };

  let uniqueWords = uniqueWordsCounter.length;
  return uniqueWords;
};

// Inputs:

// Example 1
let transcript = "Mr. Watson, come here, I want to see you.";
console.log(findUniqueWords(transcript)); // Output: 9

// Example 2
transcript = "Hello Neil and Buzz, I am talking to you by telephone from the Oval Room at the White House, and this certainly has to be the most historic telephone call ever made.";
console.log(findUniqueWords(transcript)); // Output: 27