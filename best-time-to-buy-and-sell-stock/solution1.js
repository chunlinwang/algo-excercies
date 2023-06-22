const assert = require('assert')

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let delta = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > delta) {
      delta = prices[i] - min;
    } else if (prices[i] < min) {
      min = prices[i];
    }
  }

  return delta;
};

const tests = [
  [[7,1,5,3,6,4], 5],
  [[7,6,4,3,1],0],
  [[2,4,1],2],
]

tests.map((t) => { assert.equal(t[1], maxProfit(t[0]))});