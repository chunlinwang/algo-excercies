const assert = require('assert');
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const hashMap = new Map();

  for (const num of nums){
    if (hashMap.has(num)) {
      return true;
    }

    hashMap.set(num, num)
  }

  return false;
};


const tests = [
  [[1,2,3,1], true],
  [[1,2,3,4], false],
  [[1,1,1,3,3,4,3,2,4,2], true]
];
tests.map((t) => {
  console.log(containsDuplicate(t[0]));
  assert.equal(containsDuplicate(t[0]), t[1]);
});