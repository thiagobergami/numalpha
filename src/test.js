const assert = require('assert');
const { findNumber, findLetter } = require('./lib/find')

// Test cases for findNumber
describe('findNumber', () => {
    it('should return 1 for letter "a"', () => {
        assert.strictEqual(findNumber('a'), 1);
    });

    it('should return 26 for letter "z"', () => {
        assert.strictEqual(findNumber('z'), 26);
    });

    it('should return 0 for an invalid letter "!"', () => {
        assert.strictEqual(findNumber('!'), 0);
    });

    it('should return 0 for an empty string', () => {
        assert.strictEqual(findNumber(''), 0);
    });

    it('should return 0 for a capital letter "A"', () => {  // Assuming lowercase only
        assert.strictEqual(findNumber('A'), 0);
    });
});

// Test cases for findLetter
describe('findLetter', () => {
    it('should return "a" for number 1', () => {
        assert.strictEqual(findLetter(1), 'a');
    });

    it('should return "z" for number 26', () => {
        assert.strictEqual(findLetter(26), 'z');
    });

    it('should throw an error for number 0', () => {
        assert.throws(() => {
            findLetter(0);
        }, /The number must be between 1 and 26/);
    });

    it('should throw an error for number 27', () => {
        assert.throws(() => {
            findLetter(27);
        }, /The number must be between 1 and 26/);
    });

    it('should throw an error for a negative number', () => {
        assert.throws(() => {
            findLetter(-5);
        }, /The number must be between 1 and 26/);
    });
});