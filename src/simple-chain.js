const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _links: [],
  getLength() {
    return this._links.length;
  },
  addLink(value) {
    this._links.push(`( ${value !== undefined ? value : ""} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this._links.length) {
      this._links.splice(position - 1, 1);
    } else {
      this._links = [];
      throw new Error("You can't remove incorrect link!")
    }
    return this;
  },
  reverseChain() {
    this._links = this._links.reverse();
    return this;
  },
  finishChain() {
    const result = this._links.join("~~");
    this._links = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
