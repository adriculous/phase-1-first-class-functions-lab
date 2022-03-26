// Code your solution in this file!

// return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (driversRoster) {
  const firstTwo = driversRoster.slice(0, 2);
  return firstTwo;
};

// return an array of the last two drivers
function returnLastTwoDrivers(driversRoster) {
  const lastTwo = driversRoster.slice(-2);
  return lastTwo;
}

// create an array containing two elements (prev two functions)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// higher-order function, takes one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
function createFareMultiplier(fare) {
  const multiplier = function () {
    return fare * fare;
  };
  return multiplier;
}

// declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

/* function fareDoubler(fare) {
  // const doubles = function () {
  return (fare *= 2);
  // }
} */

const fareDoubler = function (fare) {
  return (fare *= 2);
};

// declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

const fareTripler = function (fare) {
  return (fare *= 3);
};

// This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

function selectDifferentDrivers(drivers, firstOrLast) {
  return firstOrLast(drivers);
}
