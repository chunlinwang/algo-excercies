/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let len = s.length - 1;
  let total = last = cur = 0;
  for (let i = len; i >= 0; --i) {
    cur = getInt(s.charAt(i));
    if (cur < last) {
      total -= cur;
    } else {
      total += cur;
    }

    last = cur;
  }

  return total;
};

const getInt = function(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}