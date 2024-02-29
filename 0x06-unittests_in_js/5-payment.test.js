const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    // usings stubs
    beforeEach(function() {
        this.consoleLogSpy = sinon.spy(console, 'log');
        this.calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(function() {
        this.consoleLogSpy.restore();
        this.calculateNumberStub.restore();
    });

    it('should call calculateNumber', function() {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(this.calculateNumberStub, 'SUM', 100, 20);
    });

    it('should call console.log with the right message', function() {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(this.consoleLogSpy, 'The total is: 10');
    });
});
