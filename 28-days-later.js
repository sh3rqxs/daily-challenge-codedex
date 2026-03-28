function daysToInfect(city) {
  const rows = city.length;
  const columns = city[0].length;
  let queue = [];
  let healthyCount = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (city[r][c] === "🧟") {
        queue.push([r, c]); // Starting zombies.
      }
      if (city[r][c] === "👤") {
        healthyCount++; // Healthy people count.
      }
    }
  }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, down, left, right.
    let days = 0;

    // Spreads infection day by day with (BFS).
    while (queue.length > 0) {
      const currentWave = queue.length;
      let infectedToday = false;

      for (let i = 0; i < currentWave; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr >= 0 && nr < rows && nc >= 0 && nc < columns && city[nr][nc] === "👤") {
          city[nr][nc] = "🧟"; // Infects healthy people.
          healthyCount--;
          queue.push([nr, nc]);
          infectedToday = true;
        } 
      }
    }

      if (infectedToday) {
        days++; // Counts a day if someone was actually infected.
      }
    }

  return healthyCount === 0 ? days : -1; // If some people can never be infected.
}

// Inputs:

// Example 1
console.log(daysToInfect([
  ['👤', ' ', '🧟'],
  ['🧟', '👤', ' '],
  [' ', '👤', '👤']
])); // Output: 3

// Example 2
console.log(daysToInfect([
  ['👤', ' ', ' ', '🧟'],
  [' ', '👤', '👤', ' '],
  [' ', '👤', ' ', '👤'],
  ['👤', '👤', '👤', ' ']
])); // Output: -1