/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const strLength = s.length;

  if (strLength % 2 !== 0) {
    return false;
  }

  let arr = s.split('');

  let lengthInit = s.length;
  let length = s.length;
  let index = 0;
  function check(arr, openP, closeP ) {
    index = 0;
    while (index < arr.length) {
      let a = arr.indexOf(openP, index);
      if (a === -1) {
        break;
      }

      if (arr[a + 1] === undefined) {
        return false;
      }

      if (arr[a + 1] === closeP) {
        arr.splice(a, 2);
        length = arr.length;
      } else {
        index = a + 1;
      }

      if (arr.length === 0) {
        return true;
      }
    }

    return arr;
  }


  while (length > 0) {

    arr = check(arr, '(', ')');
    if (arr === false || arr === true) {
      return arr
    }
    arr = check(arr, '[', ']');
    if (arr === false || arr === true) {
      return arr
    }
    arr = check(arr, '{', '}');

    if (arr === false || arr === true) {
      return arr
    }

    if (arr.length > 0 && arr.length === lengthInit) {
      return false;
    }

    lengthInit = arr.length
  }

  return length === 0;
}

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