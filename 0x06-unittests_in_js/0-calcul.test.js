const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4 when adding 1 and 3', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('should return 5 when adding 1 and 3.7', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('should return 5 when adding 1.2 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6 when adding 1.5 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it('should return 0 when adding 1.4 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.4, 3.7), 5);
    });
    it('should return 5 when adding 1.4 and 3.2', function() {
        assert.strictEqual(calculateNumber(1.4, 3.2), 4);
    });
    it('should return 4 when adding 1.4 and 3.5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 5 when adding 1.4 and 3.6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.6), 5);
    });
    it('should return 5 when adding 1.4 and 3.8', function() {
        assert.strictEqual(calculateNumber(1.4, 3.8), 5);
    });
    it('should return 5 when adding 1.4 and 3.9', function() {
        assert.strictEqual(calculateNumber(1.4, 3.9), 5);
    });
    it('should return 5 when adding 1.4 and 3.0', function() {
        assert.strictEqual(calculateNumber(1.4, 3.0), 4);
    });
    it('should return 5 when adding 1.4 and 3.1', function() {
        assert.strictEqual(calculateNumber(1.4, 3.1), 4);
    });
});
