const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  let arr = n.toString().split("");
  const clone = [...arr];
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1, "");
    result.push(arr.join(""));
    arr = [...clone];
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
