const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return the correct data', function(done) {
        getPaymentTokenFromAPI(true)
            .then((res) => {
                expect(res).to.include({ data: 'Successful response from the API' });
                done();
            })
            .catch((err) => done(err));
    });
})