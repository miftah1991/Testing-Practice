const capitalizeFirstLetter = require('./CapatilizeString');

describe('Check the first letter', () => {
  test('first test', () => {
    expect(capitalizeFirstLetter('hello')).toMatch('Hello');
  });
});