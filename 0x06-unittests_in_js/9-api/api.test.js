const { expect } = require('chai');
const request = require('request');

describe('sendPaymentRequestToApi', function() {
    it('Should return payment methods for cart with a valid id', function(done) {
        const url = 'http://localhost:7865';
        request(url + '/cart/12', function(error, response, body) {
            if (error) {
                done(error);
            }
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    // test for invalid id
    it('Should return 404 for invalid id', function(done) {
        const url = 'http://localhost:7865';
        request(url + '/cart/hello', function(error, response, body) {
            if (error) {
                done(error);
            }
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    // test for invalid path
    it('Should return 404 for invalid path', function(done) {
        const url = 'http://localhost:7865';
        request(url + '/cart', function(error, response, body) {
            if (error) {
                done(error);
            }
            expect(response.statusCode).to.equal(404);
            expect(body).to.include('Cannot GET /cart');
            done();
        });
    });
});
