/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const strLength = s.length;

  if (strLength % 2 !== 0) {
    return false;
  }

  const mapping = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  let fill = strLength/2;

  let arr = s.split('');

  let i = 0;
  let slength = s.length;
  let updated = fill;
  while(slength > 0) {
    if (arr[i+1] === undefined) {
      break;
    }
    if (arr[i+1] === mapping[arr[i]]) {
      arr.splice(i, 2);
      slength -= 2;
      updated--;
    }

    if (fill === updated) {
      i++;
    } else {
      i = 0
      fill = updated;
    }
    if (i >= slength) {
      break;
    }
  }

  return fill === 0;
}

const tests = [
  '()',
  '(]',
  '({[]})',
  '(){}}{',
  '{[]',
  '{[}]',
  '()[]',
  '()[]{}',
  '()[]{}()',
  '(()[]{}())',
  '{()[]{}[]}{[]{}}',
  '{()[]{}()[]}',
];
tests.map((t) => console.log(isValid(t)));