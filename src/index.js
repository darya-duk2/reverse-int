module.exports = function reverse (n) {
  let s = String(Math.abs(n));
  let i = 0;
  let result = '';
  while (i < s.length) {
    result = s[i] + result;
    i += 1;
  };

  return Number(result);
}
