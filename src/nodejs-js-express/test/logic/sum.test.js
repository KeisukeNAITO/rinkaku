'use strict';
const sumLogic = require('../../logic/sum');

describe('Test for logic/sum.js', () => {
  describe('Unit Test', () => {
    test('1 param(Number) for sumLogic', () => {
      const input = { param1: 3 };
      const res = sumLogic(input);

      expect(res).toBe(3);
    });

    test('1 param for sumLogic', () => {
      const input = { param1: '10' };
      const res = sumLogic(input);

      expect(res).toBe(10);
    });

    test('3 params for sumLogic', () => {
      const input = { param1: '-1', param2: '-20', param3: '-300' };
      const res = sumLogic(input);

      expect(res).toBe(-321);
    });

    test('no param for sumLogic', () => {
      const input = {};
      const res = sumLogic(input);

      expect(res).toBe(0);
    });

    test('3 params including unexpected value for sumLogic', () => {
      const input = { param1: '1', param2: '20', param3: 'unexpected!' };
      const res = sumLogic(input);

      expect(res).toBe(21);
    });

    test('param with boolean(true) value for sumLogic', () => {
      const input = { param1: true };
      const res = sumLogic(input);

      expect(res).toBe(1);
    });

    test('param with boolean(false) value for sumLogic', () => {
      const input = { param1: false };
      const res = sumLogic(input);

      expect(res).toBe(0);
    });
  });
});
