function checkUrl(address) {
  // Checks prefix (protocol).
  if (!(address.startsWith("https://") || address.startsWith("http://"))) {
    return "invalid";
  };
  
  // Checks domain.
  let domain = address.split("://"); // Extracts domain part.
  domain = domain[1];
  if (!domain.includes(".")) { // Checks if it has a dot.
    return "invalid";
  };
  
  // Checks allowed characters in domain.
  const allowedChars = /^[a-zA-Z0-9-.]+$/.test(domain);
  if (!allowedChars) { // Checks if contains letter, digits, hypens or dots.
    return "invalid";
  }
  
  return "valid";
};

// Inputs:

// Example 1
let address = "https://codedex.io";
console.log(checkUrl(address)); // Output: "valid"

// Example 2
address = "https://netflixcom";
console.log(checkUrl(address)); // Output: "invalid"

// Example 3
address = "http://en.wikipedia.org";
console.log(checkUrl(address)); // Output: "valid"