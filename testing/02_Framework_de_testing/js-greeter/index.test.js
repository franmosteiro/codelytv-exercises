const greeter = require('./index');

describe('Greeter should', () => {
    test('return greeted name', () => {
        expect(greeter('Javi')).toBe('Hello Javi!');
    });
});