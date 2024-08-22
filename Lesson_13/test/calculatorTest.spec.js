import { expect } from 'chai';
import { Calculator } from '../calculator.js';

const calculator = new Calculator();

describe('add function functionalities', () => {
  describe('positive tests', () => {
    it('should correctly add positive numbers', async () => {
      const result = calculator.add(5, 10, 15, 20);
      expect(result).to.equal(50);
    });
    it('should correctly add negative numbers', async () => {
      const result = calculator.add(-5, -10);
      expect(result).to.equal(-15);
    });
    it('should correctly add signed numbers', async () => {
      const result = calculator.add(-5, 10, -15);
      expect(result).to.equal(-10);
    });
    it('should correctly add zero', async () => {
      const result = calculator.add(0, 0);
      expect(result).to.equal(0);
    });
    it('should correctly add fractional numbers', async () => {
      const result = calculator.add(1.5, 2.2, 4.7);
      expect(result).to.equal(8.4);
    });
    it('should correctly add extremely small numbers', async () => {
      const result = calculator.add(1e-300, 1e-500);
      expect(result).to.closeTo(1e-300, 1e-300);
    });
  });
  describe('negative tests', () => {
    [[2, '2'], [6, 'Text']].forEach((dataArray) => {
      it(`should return error when add number ${dataArray[0]} and string ${dataArray[1]}`, async () => {
        expect(calculator.add(dataArray[0], dataArray[1])).to.throw(Error, 'Invalid input provided');
      });
    });
    it('should return error when add string and string', async () => {
      const result = calculator.add('text1', 'text2');
      expect(result).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when add number and undefined', async () => {
      const result = calculator.add(5, undefined);
      expect(result).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when add number and null', async () => {
      const result = calculator.add(5, null);
      expect(result).to.throw(Error, 'Invalid input provided');
    });
    it('should return error or input number when add one number', async () => {
      const result = calculator.add(5);
      expect(result).to.be.oneOf([5, Error]);
    });
  });
});

describe('multiply function functionalities', () => {
  describe('positive tests', () => {
    it('should correctly multiply positive numbers', async () => {
      const result = calculator.multiply(5, 5, 5);
      expect(result).to.equal(125);
    });
    it('should correctly multiply negative numbers', async () => {
      const result = calculator.multiply(-5, -5, -10);
      expect(result).to.equal(-250);
    });
    it('should correctly multiply two signed numbers', async () => {
      const result = calculator.multiply(-5, 10);
      expect(result).to.equal(-50);
    });
    it('should correctly multiply on zero', async () => {
      const result = calculator.multiply(5, 0);
      expect(result).to.equal(0);
    });
    it('should correctly multiply fractions and whole numbers', async () => {
      const result = calculator.multiply(2.5, 6, 8.7, 5);
      expect(result).to.equal(652.5);
    });
    it('should correctly multiply extremely small numbers', async () => {
      const result = calculator.multiply(1e-300, 1e-500);
      expect(result).to.equal(0);
    });
    it('should correctly multiply extremely large number', () => {
      const result = calculator.multiply(1e500, 2);
      expect(result).to.equal(Infinity);
    });
  });
  describe('negative tests', () => {
    it('should return error when multiply string and number', async () => {
      const result = calculator.multiply(4, '4');
      expect(result).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when multiply string and string', async () => {
      const result = calculator.multiply('Hello', 'Hi');
      expect(result).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when multiply number and null', () => {
      const result = calculator.multiply(5, null);
      expect(result).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when multiply number and undefined', () => {
      const result = calculator.multiply(5, undefined);
      expect(result).to.throw(Error, 'Invalid input provided');
    });
    it('should return error or input number when multiply one number', async () => {
      const result = calculator.multiply(5);
      expect(result).to.be.oneOf([5, Error]);
    });
  });
});

describe('subtraction function functionalities', () => {
  describe('positive tests', () => {
    it('should correctly subtract two positive numbers', () => {
      expect(calculator.subtraction(1000, 200)).to.equal(800);
    });
    it('should correctly subtract two negative numbers', () => {
      expect(calculator.subtraction(-1000, -200)).to.equal(-800);
    });
    it('should correctly subtract two signed numbers', () => {
      expect(calculator.subtraction(-1000, 200)).to.equal(-1200);
    });
    it('should correctly subtract with zero result', () => {
      expect(calculator.subtraction(5, 5)).to.equal(0);
    });
    it('should correctly subtract fractional numbers', () => {
      expect(calculator.subtraction(5.5, 2.3)).to.equal(3.2);
    });
    it('should correctly subtract zeros', () => {
      expect(calculator.subtraction(0, 0)).to.equal(0);
    });
    it('should correctly subtract extremely small numbers', async () => {
      expect(calculator.subtraction(1e-300, 1e-500)).to.closeTo(1e-300 - 1e-500, 1e-305);
    });
    it('should correctly subtract extremely big numbers', async () => {
      expect(calculator.subtraction(1e300, 1e500)).to.equal(-Infinity);
    });
  });
  describe('negative tests', () => {
    it('should return error when only one argument is provided', async () => {
      expect(calculator.subtraction(34)).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when arguments are not numbers', async () => {
      expect(calculator.subtraction('5', 'text')).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when arguments are infinite', async () => {
      expect(calculator.subtraction(Infinity, Infinity)).to.throw(Error, 'Invalid input provided');
    });
  });
});

describe('divide function functionalities', () => {
  describe('positive tests', () => {
    [[10, 2, 5], [-10, -2, 5], [10, -2, -5], [-10, 2, -5]].forEach((dataArray) => {
      it(`should correct divide positive and negative numbers: ${dataArray[0]} ${dataArray[1]}`, async () => {
        expect(calculator.divide(dataArray[0], dataArray[1])).to.equal(dataArray[2]);
      });
    });
    it('should correct divide fractions numbers', async () => {
      expect(calculator.divide(3.34, 1.8)).to.be.closeTo(1.855555556, 0.000000001);
    });
    it('should correct divide zero on number', async () => {
      expect(calculator.divide(0, 78)).to.be.equal(0);
    });
  });
  describe('negative tests', () => {
    it('should return error when only one argument is provided', async () => {
      expect(calculator.divide(34)).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when arguments are not numbers', async () => {
      expect(calculator.divide('5', 'text')).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when divide on zero', async () => {
      expect(calculator.divide(66, 0)).to.throw(Error, 'Division by zero');
    });
  });
});

describe('exponentiation function functionalities', () => {
  describe('positive tests', () => {
    it('should correct square positive number', async () => {
      expect(calculator.exponentiation(5)).to.be.equal(25);
    });
    it('should correct square negative number', async () => {
      expect(calculator.exponentiation(-5)).to.be.equal(25);
    });
    it('should correct square zero', async () => {
      expect(calculator.exponentiation(0)).to.be.equal(0);
    });
    it('should correct square fraction number', async () => {
      expect(calculator.exponentiation(3.14)).to.be.closeTo(9.8596, 0.0001);
    });
    it('should correct square infinity', async () => {
      expect(calculator.exponentiation(Infinity)).to.be.equal(Infinity);
    });
  });
  describe('negative tests', () => {
    it('should return error when more than one argument is provided', async () => {
      expect(calculator.exponentiation(34, 7)).to.throw(Error, 'Invalid input provided');
    });
    it('should return error when argument is not number', async () => {
      expect(calculator.exponentiation('Text')).to.throw(Error, 'Invalid input provided');
    });
  });
});
