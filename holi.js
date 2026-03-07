function findMissingColors(grid) {
  const fullSet = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫"];
  const seenColors = new Set()
  // Turns the 2D array into a simple list.
  for (let row of grid) {
    for (let colors of row) {
      seenColors.add(colors);
    };
  };
  // Finds the missing color or colors in order.
  const missingColors = [];
  for (let colors of fullSet) {
    if (!seenColors.has(colors)) {
      missingColors.push(colors)
    };
  };
  return missingColors;
};
// Input
// Example 1
let grid = [["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟥"],
  ["🟨", "🟩", "🟦", "🟪", "🟥", "🟧", "🟨"],
  ["🟦", "🟥", "🟧", "🟨", "🟩", "🟪", "🟦"],
  ["🟩", "🟦", "🟪", "🟥", "🟧", "🟨", "🟩"],
  ["🟧", "🟨", "🟩", "🟦", "🟪", "🟥", "🟧"],
  ["🟪", "🟧", "🟨", "🟩", "🟦", "🟥", "🟪"],
  ["🟥", "🟦", "🟩", "🟪", "🟨", "🟧", "🟦"]
];
console.log(findMissingColors(grid)); // Output: [ '🟫' ]