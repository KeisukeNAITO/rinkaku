'use strict';

/**
 * summation func (that can be interpreted as a number).
 * @param {JSON} operands
 * @returns
 */
const sumLogic = function (operands) {
  let sum = 0;
  for (const id in operands) {
    if (isFinite(operands[id])) {
      sum += Number(operands[id]);
    }
  }
  return sum;
};

module.exports = sumLogic;
