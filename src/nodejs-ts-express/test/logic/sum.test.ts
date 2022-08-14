import sumLogic from '../../src/logic/sum';

describe('Test for logic/sum.ts', () => {
  describe('Unit Test', () => {
    test('1 param(Number) for sumLogic', () =>{
      const input = { param1: 3 };
      const res = sumLogic(input);     
      expect(res).toBe(3);
    })
  });
});
