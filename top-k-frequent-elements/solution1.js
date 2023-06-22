/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const m = new Map();
  const res = [];
  nums.map((n) => {
    let v = m.has(n) ? m.get(n)+1 : 1;
    m.set(n, v)
  });


  m.forEach((value, key )=> {
    res.push([key, value]);
  });

  for (let i = 0; i < res.length; i++ ) {
    for (let j = i; j < res.length; j++ ) {
      if (res[i][1] < res[j][1] ) {
        let temp = res[j];
        res[j] = res[i];
        res[i] = temp;
      }
    }
  }

  let r = [];
  for (let i = 0; i < k; i++) {
    r.push(res[i][0]);
  }

  return r;
};

topKFrequent([3, 1,1,1,2,2], 1);