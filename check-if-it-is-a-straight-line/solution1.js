const assert = require('assert')

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const tag = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0]-coordinates[0][0]);

  const delta = coordinates[1][1] - (coordinates[1][0] * tag);

  console.log(tag, delta);
  for (let i = 2; i < coordinates.length; i++) {
    if (tag === 0 && coordinates[i][1] !== coordinates[0][1]) {
      return false
    }

    if (tag === Infinity && coordinates[i][0] !== coordinates[0][0]) {
      return false
    }

    if (tag !== Infinity  && tag !== 0 && coordinates[i][1] !== (tag * coordinates[i][0]) + delta) {
      return false;
    }
  }

  return true;
};

const tests = [
  [[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]], true],
  [[[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]], false],
  [[[0,0],[0,1],[0,-1]], true],
  [[[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]], true],
  [[[1,-8],[2,-3],[1,2]], false],
];
tests.map((t) => {
  assert.equal(checkStraightLine(t[0]), t[1]);
});