const fizzbuzz = require('./index.js');

describe('Fizzbuzz should', () => {

    test('return itself', () => {

        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(2)).toBe(2);

    });

    test('return "Fizz" if divisible by 3', () => {

        expect(fizzbuzz(3)).toBe('Fizz');

    });

});