/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const parenthesesRegex = /\{\}|\(\)|\[\]/;

  const strLength = s.length;

  if (strLength % 2 !== 0) {
    return false;
  }

  let newS = s.replace(parenthesesRegex,'');

  let length = newS.length;

  while(length > 0) {
    newS = newS.replace(parenthesesRegex,'');

    if (length === newS.length) {
      break;
    }

    length = newS.length;
  }

  return length === 0;
};

const tests = [
  '()',
  '({[]})',
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