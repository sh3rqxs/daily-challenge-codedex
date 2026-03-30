function emoticonsMood(message) {
  const happy_emoticons = {
    classic_smiley_face: ":)", playful: ":p", laughing: "xd", cute: ":3", heart: "<3", rock_on: "\m/"
  };
  const sad_emoticons = {
    frown: ":(", crying: ":'(", middle_fingers: "t(-.-t)"
  };

  const string = message.toLowerCase();
  let score = 0;
  for (let emoticon of Object.values(happy_emoticons)) {
    let counter = string.split(emoticon).length -1;
    score += counter;
  }

  for (let emoticon of Object.values(sad_emoticons)) {
    let counter = string.split(emoticon).length -1;
    score -= counter;
  }

  return score;
}
// Inputs:

// Example 1
console.log(emoticonsMood("i'm going to see a psychic tonite :)")); // Output: 1

// Example 2
console.log(emoticonsMood("dancing with friends at the club! XD come thru <3 <3")); // Output: 3