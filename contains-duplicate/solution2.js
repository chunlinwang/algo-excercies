const assert = require('assert');
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const hashMap = new Map();

  for (const num of nums){
    const l1 = nums.indexOf(num)
    const l2 = nums.lastIndexOf(num)
    if (l1 !== l2) {
      return true;
    }
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