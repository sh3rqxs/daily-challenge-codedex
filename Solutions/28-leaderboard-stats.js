function averageTime(total, completed) {
  const [hours, minutes, seconds] = total.split(":");
  const time_in_seconds = 
  (Number(hours) * 3600) + (Number(minutes) * 60) + Number(seconds);

  const ave_time = Math.round(time_in_seconds / completed);

  return ave_time;
}

// Inputs:

// Example 1
console.log(averageTime("1:41:29", 26)); // Output: 234

// Example 2
console.log(averageTime("10:49:08", 27)); // Output: 1443