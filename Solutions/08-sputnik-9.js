function calculateDescent(altitude) {
  // Converts altitude to meters. 
  let altitudeInMeters = altitude * 1000;

  // Identifies the starting layer.
  let descentTime = 0;
  
  // Exosphere (700-10,000 km)
  if (altitudeInMeters > 700000) {
    let start = altitudeInMeters;
    let end = 700000;
    let distanceTraveled = start - end;
    descentTime += distanceTraveled / 2000;
    altitudeInMeters = end;
  };

  // Thermosphere (85-700 km)
  if (altitudeInMeters > 85000) {
    let start = altitudeInMeters;
    let end = 85000;
    let distanceTraveled = start - end;
    descentTime += distanceTraveled / 500;
    altitudeInMeters = end;
  };

  // Mesosphere (50-85 km)
  if (altitudeInMeters > 50000) {
    let start = altitudeInMeters;
    let end = 50000;
    let distanceTraveled = start - end;
    descentTime += distanceTraveled / 200;
    altitudeInMeters = end;
  };

  // Stratosphere (12-50 km)
  if (altitudeInMeters > 12000) {
    let start = altitudeInMeters;
    let end = 12000;
    let distanceTraveled = start - end;
    descentTime += distanceTraveled / 75;
    altitudeInMeters = end;
  };

  // Troposphere (0-12 km)
  if (altitudeInMeters > 0) {
    let start = altitudeInMeters;
    let end = 0;
    let distanceTraveled = start - end;
    descentTime += distanceTraveled / 20;
    altitudeInMeters = end;
  };

  let totalDescentTime = descentTime;
  return Number(totalDescentTime.toFixed(1));
};

// Inputs:

// Example 1
let altitude = 200;
console.log(calculateDescent(altitude)); // Output: 1511.7

// Example 2
altitude = 12;
console.log(calculateDescent(altitude)); // Output: 600