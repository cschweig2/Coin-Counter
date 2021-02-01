import coinCounter from '../src/coinCounter.js';

describe('Add function', () => {

  test('should return correct number of quarters', () => {
      const result = coinCounter(5.25);
      expect(result[0]).toEqual(21);
  });

  test('should return correct number of dimes', () => {
    const result = coinCounter(5.35);
    expect(result[1]).toEqual(1);
  });

  test('should return correct number of nickels', () => {
    const result = coinCounter(5.40);
    expect(result[2]).toEqual(1);
  });

  test('should return correct number of pennies', () => {
    const result = coinCounter(5.42);
    expect(result[3]).toEqual(2);
  });
});