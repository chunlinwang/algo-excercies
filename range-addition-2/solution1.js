var maxCount = function(m, n, ops) {
  if (ops.length === 0) {
    return m*n;
  }

  const minC = ops.reduce((acc, cur) => {

    if (acc.length === 0) {
      return cur;
    }

    return [Math.min(acc[0], cur[0]), Math.min(acc[1], cur[1])];
  }, []);

  return minC[0] * minC[1];
};


const tests = [
  {m: 3, n: 3, ops: [[2,2],[3,3]]},
  {m:3, n: 3, ops: [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]},
  { m: 3, n: 3, ops: []},
  { m: 3, n: 3, ops: [[1, 2]]}
];

tests.map((t) => console.log(maxCount(t.m, t.n, t.ops)));