const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((prev, curr) => {
    curr
      .split(".")
      .reverse()
      .forEach((_, ind, arr) => {
        let result = "";
        for (let i = 0; i <= ind; i++) {
          result += `.${arr[i]}`;
        }
        prev[result] = prev[result] ? prev[result] + 1 : 1;
      });
    return prev;
  }, {});
}

module.exports = {
  getDNSStats
};
