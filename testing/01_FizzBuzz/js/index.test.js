const fizzbuzz = require('./index.js');

describe('Fizzbuzz should', () => {

    test('return itself', () => {

        expect(fizzbuzz(1)).toBe(1);

    });

});