const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const indexes = [];
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    indexes[i] = new Set();
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        indexes[i].add(j);
      }
      result += i > 0 && indexes[i - 1].has(j) ? 0 : matrix[i][j];
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
