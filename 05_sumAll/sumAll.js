const sumAll = function(min, max) {
  const start = Math.min(min, max);
  const end = Math.max(min, max);

  // Use the formula for the sum of an arithmetic sequence: sum = n * (a + l) / 2
  const n = end - start + 1;
  const sum = (n * (start + end)) / 2;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
