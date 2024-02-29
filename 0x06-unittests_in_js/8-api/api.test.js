const { expect } = require('chai');
const request = require('request');

describe('sendPaymentRequestToApi', function() {
    it('should return correct status code and message', function(done) {
        const url = 'http://localhost:7865';
        request(url, function(error, response, body) {
            if (error) {
                done(error);
            }
            expect(response).to.exist;
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        })
    });
});
