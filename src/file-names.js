const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const cloneNames = [...names];
  let foundObj = {};
  for (let i = 0; i < names.length; i++) {
    const foundInd = cloneNames.indexOf(cloneNames[i], i + 1);
    const currValue = cloneNames[i];

    if (foundInd !== -1) {
      foundObj[currValue] = foundObj[currValue]
        ? foundObj[currValue] + 1
        : 1;
      cloneNames[foundInd] = `${cloneNames[foundInd]}(${foundObj[currValue]})`;
      i--;
    }
  }
  return cloneNames;
}

module.exports = {
  renameFiles
};
