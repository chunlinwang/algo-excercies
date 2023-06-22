/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  while(s.length > 0) {
    let l = s.length;

    s = s.replace( /\{\}|\(\)|\[\]/,'');

    if (l === s.length) {
      break;
    }
  }

  return s.length === 0;
};

const tests = [
  '))',
  '[])',
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