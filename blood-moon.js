function bloodMoon(time) {
  // Splits time into hours and minutes.
  const [hours, minutes] = time.split(":").map(Number);

  // Calculates the total minutes.
  let totalMinutes = hours * 60 + minutes;
  const interval = 2 * 60 + 48; // 168 minutes.

  // Finds the next 3 timestamps.
  let timeStamps =[];
  for (let i = 1; i <= 3; i++) {
    nextTime = totalMinutes + interval * i; // Adds the interval to time.
    nextTime = nextTime % (24 * 60); // Loops back to 00:00 after the hours reach 24 (midnight).
    
    // Converts time back to hours and minutes.
    let nextHours = Math.floor(nextTime / 60);
    let nextMinutes = nextTime % 60;

    // Formats time with leading zeros to ensure it has 2 digits (00:00).
    let formatted =
      String(nextHours).padStart(2, "0") + ":" +
      String(nextMinutes).padStart(2, "0");
      timeStamps.push(formatted);
  }; 

  return timeStamps;
};

// Inputs:

// Example 1
let time = "01:00"; 
console.log(bloodMoon(time)); // Output: [ '03:48', '06:36', '09:24' ]

// Example 2
time = "22:30"; 
console.log(bloodMoon(time)); // Output: [ '01:18', '04:06', '06:54' ]