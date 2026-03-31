function pickVoucher(vouchers, delays, max_wait) {
  let bestIndex = -1;
  let maxRatio = -Infinity;
  
  // Filters out any delay time that exceeds max wait.
  for (let i = 0; i < delays.length; i++) {
    if (delays[i] <= max_wait) { 
        
      // Calculates the ratio of each valid voucher.
      const ratio = vouchers[i] / delays[i];

      // Finds which voucher has the highest ratio.
      if (ratio > maxRatio) { // If there's a tie, it keeps the first one.
        maxRatio = ratio;
        bestIndex = i;
      }
    }
  }
  
  return bestIndex;
};

// Inputs:

// Example 1
let vouchers = [50, 120, 20];
let delays = [2, 4, 1];
let max_wait = 3;
console.log(pickVoucher(vouchers, delays, max_wait)) // Output: 0

// Example 2
vouchers = [300, 400, 1000];
delays = [5, 6, 10];
max_wait = 4;
console.log(pickVoucher(vouchers, delays, max_wait)) // Output: -1