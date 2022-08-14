const sumLogic = function (operands: any) {
  let sum = 0;
  for (const id in operands) {
    if (isFinite(operands[id])) {
      sum += Number(operands[id]);
    }
  }
  return sum;
};

export default sumLogic;
