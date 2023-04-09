const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const commonRepeater = (str, repeatTimes, separator) => {
  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result += str + (i < repeatTimes - 1 ? separator : '');
  }
  return result;
}

function repeater(str, {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' }) {
  let stringStr = str;
  if (addition !== undefined) {
    stringStr += commonRepeater(addition, additionRepeatTimes, additionSeparator);
  }
  return commonRepeater(stringStr, repeatTimes, separator)
}

module.exports = {
  repeater
};
