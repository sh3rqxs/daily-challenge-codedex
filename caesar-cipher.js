function decodeMessage(message, shift) {
  let decodedMessage = "";
 
    // Loops through each character in the message.
  for (let char of message) {
    if (char === " ") {
      decodedMessage += " "; // Keeps spaces.
      continue;
    };
    
    // Gets the ASCII code of the character.
    let asciiCode = char.charCodeAt(0);  
    
    // Shifts backwards and wraps around.
    let newCode = (((asciiCode - 97 - shift) % 26) + 26) % 26 + 97;
    
    // Converts back to character.
    decodedMessage += String.fromCharCode(newCode);
  };
  
  return decodedMessage;
};

// Inputs:

// Battle Message
let message = "dwwdfn dw gdzq";
let shift = 3;
console.log(decodeMessage(message, shift)); // Output: attack at dawn

// The Beatles Conspiracy Theory
message = "ymj bfqwzx bfx ufzq";
shift = 5;
console.log(decodeMessage(message, shift)); // Output: the walrus was paul

// Secret Note
message = "ai wlsyph womt kcq gpeww";
shift = 4;
console.log(decodeMessage(message, shift)); // Output: we should skip gym class