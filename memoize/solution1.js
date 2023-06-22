/**
 * @param {Function} fn
 */
function memoize(fn) {
  const hash = new Map();
  return function(...args) {
    const key = args.join('_');
    if (hash.has(key)) {
      return hash.get(key);
    }

    const result = fn(...args);
    hash.set(key, result);

    return result;
  }
}

let callCount = 0;

const fnf = memoize(
  function (a, b) {
    callCount += 1;
    return a + b;
  });

console.log(fnf(1, 3));
console.log(fnf(1, 3));
console.log(fnf(1, 3));
console.log(fnf(1, 3));
console.log(fnf(1, 3));

console.log(callCount);
