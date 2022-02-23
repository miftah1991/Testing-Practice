const Calculator = require('./calculator');

const calculator = new Calculator();
describe('caculator Methos',() =>{


describe('Adding Methods', () => {
    test('Adding 1', () => {
      expect(calculator.add(1, 2)).toBe(3)
    });
    test('Adding 2', () => {
      expect(calculator.add(-1, -22)).toBe(-23)
    });
    test('Adding 3', () => {
      expect(calculator.add('MIftah', 'Amin')).toBeUndefined()
    });
  });

  describe('Substract Methods', () => {
    test('Substract 1', () => {
      expect(calculator.substract(8, 2)).toBe(6)
    });
    test('Substract 2', () => {
      expect(calculator.substract(-1, -22)).toBe(21)
    });
    test('Substract 3', () => {
      expect(calculator.substract('MIftah', 'Amin')).toBeUndefined()
    });
  });
  describe('Multiply Methods', () => {
    test('Multiply 1', () => {
      expect(calculator.multiply(8, 2)).toBe(16)
    });
    test('Multiply 2', () => {
      expect(calculator.multiply(-1, -22)).toBe(22)
    });
    test('Multiply 3', () => {
      expect(calculator.multiply('MIftah', 'Amin')).toBeUndefined()
    });
  });
  describe('Divide Methods', () => {
    test('Divide 1', () => {
      expect(calculator.divide(8, 2)).toBe(4)
    });
    test('Divide 2', () => {
      expect(calculator.divide(-10, -2)).toBe(5)
    });
    test('Divide 3', () => {
      expect(calculator.divide('MIftah', 'Amin')).toBeUndefined()
    });
  });
})