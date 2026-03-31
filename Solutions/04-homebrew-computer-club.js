function dompierMusic(switches) {
  // Defines the frequency to music note table.
  const freqToNote = {
    261: "C4",
    294: "D4",
    329: "E4",
    349: "F4",
    392: "G4",
    440: "A4",
    494: "B4",
    523: "C5",
    0: "REST" 
    };

  // Converts the binary string -> decimal -> music note.
  let musicNote = [];
  for (let i = 0; i < switches.length; i++) {
    const binString = switches[i]; // Grabs the current binary string so you can work with it.
    const decimal = parseInt(binString, 2); // Converts binary -> decimal.
    const note = freqToNote[decimal]; // Finds the note that matches the frequency.
    musicNote.push(note);
  };

  return musicNote;
};

// Inputs:

// Example 1
let switches = ["0100000101", "0100000101", "0110001000", "0110001000", "0110111000", "0110111000", "0110001000", "0000000000"]
console.log(dompierMusic(switches)); // Output: ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'REST']

// Example 2
switches = ["0101001001", "0101001001", "0101001001", "0000000000", "0101001001", "0101001001", "0101001001", "0000000000", "0101001001", "0110001000", "0100000101", "0100100110", "0101001001", "0000000000", "0000000000"];
console.log(dompierMusic(switches)); // Output: ['E4', 'E4', 'E4', 'REST', 'E4', 'E4', 'E4', 'REST', 'E4', 'G4', 'C4', 'D4', 'E4', 'REST', 'REST']