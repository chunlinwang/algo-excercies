var TimeLimitedCache = function() {
  this.timeLimitedCache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const status = this.timeLimitedCache.has(key);
  const time = new Date().valueOf()+duration;

  this.timeLimitedCache.set(key, [value, time]);

  return status;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  const now = new Date();
  if (this.timeLimitedCache.has(key)) {
    const value = this.timeLimitedCache.get(key);
    if (now <= value[1]) {
      return value[0];
    }
  }

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  const now = new Date();

  let count = 0;
  this.timeLimitedCache.forEach((value) => {
    if (value[1] >= now) {
      count++;
    }
  });

  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

var obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)) // 42
console.log(obj.count()) // 1