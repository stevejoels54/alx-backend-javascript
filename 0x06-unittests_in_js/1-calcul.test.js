const assert = require('assert');
const calculateNumber = require('./1-calcul');

// 2 test cases for each type of operation
describe('calculateNumber', function() {
    it('should return 4 when adding 1 and 3', function() {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return 5 when adding 1 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    
    it('should return -2 when subtracting 1 and 3', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should return -3 when subtracting 1 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('should return 0.4 when dividing 2 and 5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 2, 5), 0.4);
    });

    it('should return 0.25 when dividing 1 and 3.7', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('should return Error when dividing 1 and 0', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });

    it('should return Error when dividing 1 and 0.7', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 3, 0.0), 'Error');
    });

});