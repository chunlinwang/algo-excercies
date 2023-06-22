import * as assert from 'assert';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const tArr = t.split('');

  for (const ch of s) {
    const index = tArr.indexOf(ch);
    if (index === -1) {
      return false;
    } else {
      tArr.splice(index, 1);
    }
  }

  return true;
};

const tests = [
  [['anagram', 'nagaram'], true],
  [['rat', 'car'], false],
];
tests.map((t) => {
  assert.equal(isAnagram(t[0][0], t[0][1]), t[1]);
});