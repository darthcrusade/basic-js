const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

const params = {
  discardPrev: "--discard-prev",
  doublePrev: "--double-prev",
  discardNext: "--discard-next",
  doubleNext: "--double-next"
};

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case params.discardPrev:
        i > 0 && result.pop();
        break;
      case params.doublePrev:
        i > 0 && result.push(arr[i - 1]);
        break;
      case params.discardNext:
        arr.splice(i, 1);
        arr.splice(i + 1, 1);
        break;
      case params.doubleNext:
        arr[i + 1] && result.push(arr[i + 1])
        break;
      default:
        result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
