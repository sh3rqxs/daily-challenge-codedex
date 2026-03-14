function cutPie(diameter, friends) {
  // Calculates the circumference of the pie.
  const circumference = Math.PI * diameter;
  
  // Divides the slices evenly among friends.
  const crustPerFriend = circumference / friends;
  return Number(crustPerFriend.toFixed(2));
}

// Inputs:

// Example 1
let diameter = 10;
let friends = 8;
console.log(cutPie(diameter, friends)); // Output: 3.93

// Example 2
diameter = 12;
friends = 5;
console.log(cutPie(diameter, friends)); // Output: 7.54