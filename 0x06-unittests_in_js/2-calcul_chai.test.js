const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

// 2 test cases for each type of operation
describe('calculateNumber', function() {
    it('should return 4 when adding 1 and 3', function() {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return 5 when adding 1 and 3.7', function() {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    
    it('should return -2 when subtracting 1 and 3', function() {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should return -3 when subtracting 1 and 3.7', function() {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('should return 0.4 when dividing 2 and 5', function() {
        expect(calculateNumber('DIVIDE', 2, 5)).to.equal(0.4);
    });

    it('should return 0.25 when dividing 1 and 3.7', function() {
        expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return Error when dividing 1 and 0', function() {
        expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });

    it('should return Error when dividing 1 and 0.7', function() {
        expect(calculateNumber('DIVIDE', 3, 0.0)).to.equal('Error');
    });

});