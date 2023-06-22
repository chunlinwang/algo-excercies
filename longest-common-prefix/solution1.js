var solution1 = function(strs) {
  const arrayCount = strs.length;
  if (arrayCount === 1) {
    return strs[0];
  }

  const l = Math.min(...strs.map((s) => s.length));
  let prefix = '';

  const firstStr = strs[0];
  for (let i = 0; i < l; ++i) {
    let firstChar = firstStr[i];
    const checkPoint = strs.reduce((acc, cur) => {
      if (cur[i] === firstChar ) {
        acc++;
      }
      return acc;
    }, 0);

    if (checkPoint === arrayCount) {
      prefix += firstChar;
    } else {
      break;
    }
  }

  return prefix;
};

console.log(solution1( ["flower","flow","flight"]));
console.log(solution1( ["a"]));
console.log(solution1( ["ab", "a"]));
console.log(solution1( ["a", "ab"]));