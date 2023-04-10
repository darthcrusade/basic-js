const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const RATIO = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity)) {
    return false;
  } else {
    const sampleActivityNumber = Number(sampleActivity);
    if (sampleActivityNumber > 15 || sampleActivityNumber <= 0) {
      return false;
    }
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivityNumber) * HALF_LIFE_PERIOD) / RATIO);
  }
}

module.exports = {
  dateSample
};
