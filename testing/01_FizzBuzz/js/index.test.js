const fizzbuzz = require('./index.js');

describe('Fizzbuzz should', () => {

    test('return itself', () => {

        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(2)).toBe(2);

    });

    test('return "Fizz" if divisible by 3', () => {

        expect(fizzbuzz(3)).toBe('Fizz');

    });

    test('return "Buzz" if divisible by 5', () => {

        expect(fizzbuzz(5)).toBe('Buzz');

    });

    test('return "FizzBuzz" if divisible by 3 and 5', () => {

        expect(fizzbuzz(15)).toBe('FizzBuzz');

    });

});