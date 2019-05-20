const fizzbuzz = require('./index.js');

describe('Fizzbuzz should', () => {

    test('return itself', () => {

        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(2)).toBe(2);

    });

});