import add from '../src/coinCounter.js';

describe('Add function', () => {

  test('should add two numbers together', () => {
  expect(add(1,2)).toEqual(3);
  });
});