function luckyRiver(river, hours) {
  let dyedRiver = Array(river.length).fill("💧");
  
  // Finds the index of each green patch.
  let greenPatch = [];
  for (let i = 0; i < river.length; i++) {
    if (river[i] === "☘️") {
      greenPatch.push(i);
    }
  }
  
  // Drifts the dye source one position to the right after every hour.
  greenPatch.forEach(dyeSource => {
    for (let p = dyeSource; p <= dyeSource + hours; p++) {
      if (p < river.length) {
        dyedRiver[p] = "☘️";
      }
    }
  });
  
  return dyedRiver;
};

// Inputs:

// Example 1
let river = ['💧', '☘️', '💧', '💧', '💧', '☘️', '💧', '💧'];
let hours = 1;
console.log(luckyRiver(river, hours)); // Output: ['💧', '☘️', '☘️', '💧', '💧', '☘️', '☘️', '💧']

// Example 2
river = ['☘️', '💧', '💧', '💧', '💧', '☘️', '💧', '💧'];
hours = 3;
console.log(luckyRiver(river, hours)); // Output: ['☘️', '☘️', '☘️', '☘️', '💧', '☘️', '☘️', '☘️'] 