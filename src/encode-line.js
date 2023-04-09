const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      ++count;
    } else {
      result += count > 1 ? `${count}${strArr[i]}` : strArr[i];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
