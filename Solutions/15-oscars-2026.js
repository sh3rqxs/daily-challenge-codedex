function oscarPool(predictions) {
  const actualWinners = ["One Battle After Another", "Michael B. Jordan", "Jessie Buckley", "Paul Thomas Anderson"];
  const totalPredictions = actualWinners.length
  const accuracy = {};
  
  // Calculates the accuracy for each friend's prediction.
  for (let friendsArray of predictions) {
    let friendsName = friendsArray[0];
    let predictedWinners = friendsArray.slice(1);
    let correctPredictions = 0
    
    for (let i = 0; i < totalPredictions; i++) {
      if (predictedWinners[i] === actualWinners[i]){
        correctPredictions++
      }
    }
    accuracy[friendsName] = correctPredictions / totalPredictions;
  }
  
  // Finds the friend/s with the highest accuracy.
  const highestAccuracy = Math.max(...Object.values(accuracy));
  const name = Object.keys(accuracy).filter(friendsName => accuracy[friendsName] === highestAccuracy);
  
  return name.length > 1 ? "Tie" : name[0];
}; 

// Inputs:

// Example 1
let predictions = [
  ["@sonny", "One Battle After Another", "Michael B. Jordan", "Jessie Buckley", "Ryan Cooger"],
  ["@brit896", "Marty Supreme", "Timothée Chalamet", "Jessie Buckley", "Josh Safdie"],
  ["@tylerwhit", "Sinners", "Michael B. Jordan", "Rose Byrne", "Paul Thomas Anderson"]
];
console.log(oscarPool(predictions)); // Output: @sonny

// Example 2
predictions = [
  ["Kalshi", "One Battle After Another", "Michael B. Jordan", "Jessie Buckley", "Paul Thomas Anderson"],
  ["Polymarket", "One Battle After Another", "Michael B. Jordan", "Jessie Buckley", "Paul Thomas Anderson"]
];
console.log(oscarPool(predictions)); // Output: Tie

// Example 3
predictions = [
  ["Rotten Tomatoes", "The Secret Agent", "Wagner Moura", "Renate Reinsve", "Kleber Mendonça Filho"],
  ["IMDb", "One Battle After Another", "Timothée Chalamet", "Jessie Buckley", "Chloé Zhao"]
];
console.log(oscarPool(predictions)); // Output: IMDb