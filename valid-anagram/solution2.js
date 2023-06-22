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

  while (s.length) {
    let firstChar = s[0];

    const reg = new RegExp(firstChar, 'g')
    s = s.replace(reg, '');
    t = t.replace(reg, '');

    if (s.length !== t.length) {
      return false;
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